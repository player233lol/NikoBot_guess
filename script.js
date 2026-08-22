const CONFIG = {
    DATA_BASE: 'data/json/',
    AUDIO_BASE: 'data/audio/',
    UI_AUDIO_BASE: 'data/ui/',
    TIMEOUT: 60,
    MAX_ATTEMPTS: 3,
    MAX_HINTS: 3,
};

class UIAudio {
    constructor() {
        this.sounds = {};
        this.preloadSounds();
        this.bindEvents();
    }

    preloadSounds() {
        const files = {
            error: 'error.ogg',
            right: 'right.ogg',
            choice: 'choice.ogg',
            upload: 'upload.ogg'
        };
        for (const [key, file] of Object.entries(files)) {
            const audio = new Audio(CONFIG.UI_AUDIO_BASE + file);
            audio.preload = 'auto';
            this.sounds[key] = audio;
        }
    }

    play(key) {
        const sound = this.sounds[key];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        }
    }

    bindEvents() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.play('choice');
            });
            btn.addEventListener('click', () => {
                this.play('upload');
            });
        });
    }
}

let currentGame = null;
let timerInterval = null;
let timeLeft = CONFIG.TIMEOUT;

let audioPollInterval = null;
let audioStopTime = 0;
let audioStartTime = 0;
let isClipPlaying = false;

const uiAudio = new UIAudio();

const dom = {
    category: document.getElementById('categorySelect'),
    mode: document.getElementById('modeSelect'),
    startBtn: document.getElementById('startBtn'),
    questionContent: document.getElementById('questionContent'),
    audioPlayer: document.getElementById('audioPlayer'),
    musicPlayer: document.getElementById('musicPlayer'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    answerInput: document.getElementById('answerInput'),
    submitBtn: document.getElementById('submitBtn'),
    hintBtn: document.getElementById('hintBtn'),
    endGameBtn: document.getElementById('endGameBtn'),
    feedbackMsg: document.getElementById('feedbackMessage'),
    hintHistory: document.getElementById('hintHistory'),
    attemptInfo: document.getElementById('attemptInfo'),
    hintCount: document.getElementById('hintCount'),
    timer: document.getElementById('timer'),
};

async function loadJSON(path) {
    const resp = await fetch(path);
    if (!resp.ok) throw new Error(`HTTP ${resp.status} - ${path}`);
    return await resp.json();
}

function getDataPaths(category, mode) {
    const base = CONFIG.DATA_BASE;
    const suffix = mode === 'dialogue' ? 'text' : 'music';
    return `${base}${suffix}_${category}.json`;
}

class Game {
    constructor(category, mode, dataItem, validNames) {
        this.category = category;
        this.mode = mode;
        this.dataItem = dataItem;
        this.answer = dataItem.answer || dataItem.speaker || '';
        this.validNames = validNames.map(s => s.toLowerCase().trim()).filter(s => s.length > 0);
        this.startTime = Date.now();
        this.finished = false;
        this.winner = null;
        this.attempts = {};
        this.hintUsed = 0;
        this.hintHistory = [];

        if (mode === 'music') {
            const files = dataItem.files || [];
            this.selectedFile = files.length ? files[Math.floor(Math.random() * files.length)] : null;
            this.audioPath = this.selectedFile ? `${CONFIG.AUDIO_BASE}${category}/${this.selectedFile}` : null;
        }
    }

    isTimeout() {
        return (Date.now() - this.startTime) / 1000 > CONFIG.TIMEOUT;
    }

    addAttempt(userId) {
        const uid = String(userId);
        if (!this.attempts[uid]) this.attempts[uid] = 0;
        this.attempts[uid] += 1;
        return this.attempts[uid];
    }

    getAttempts(userId) {
        return this.attempts[String(userId)] || 0;
    }

    checkAnswer(input) {
        const normalized = input.trim().toLowerCase();
        return this.validNames.includes(normalized);
    }

    getHint() {
        if (this.hintUsed >= CONFIG.MAX_HINTS) return null;
        const letters = new Set();
        for (const ch of this.answer) {
            if (ch.match(/[a-zA-Z]/)) letters.add(ch.toUpperCase());
        }
        if (letters.size === 0) return null;
        const arr = Array.from(letters);
        const chosen = arr[Math.floor(Math.random() * arr.length)];
        const firstChar = this.answer.match(/[a-zA-Z]/)?.[0]?.toUpperCase() || null;
        let hintMsg = (chosen === firstChar) ? `该名字的第一个字母是 ${chosen}` : `该名字中包含字母 ${chosen}`;
        this.hintUsed++;
        this.hintHistory.push(hintMsg);
        return hintMsg;
    }

    finish(winner = null) {
        this.finished = true;
        this.winner = winner;
    }
}

function stopAudioPolling() {
    if (audioPollInterval) {
        clearInterval(audioPollInterval);
        audioPollInterval = null;
    }
    isClipPlaying = false;
}

function startAudioPolling(player, startTime, clipLen) {
    stopAudioPolling();
    const stopPoint = startTime + clipLen;
    audioStopTime = stopPoint;
    audioStartTime = startTime;
    isClipPlaying = true;

    audioPollInterval = setInterval(() => {
        if (!isClipPlaying) {
            clearInterval(audioPollInterval);
            audioPollInterval = null;
            return;
        }
        if (player.currentTime >= stopPoint) {
            player.pause();
            player.currentTime = startTime;
            isClipPlaying = false;
            dom.playPauseBtn.textContent = '▶ 播放片段';
            dom.feedbackMsg.textContent = '片段播放完毕，点击按钮可重听本段。';
            clearInterval(audioPollInterval);
            audioPollInterval = null;
        }
    }, 100);
}

function resetAudio() {
    const player = dom.musicPlayer;
    stopAudioPolling();
    player.pause();
    player.src = '';
    player.load();
    dom.playPauseBtn.textContent = '▶ 播放片段';
    player.onloadedmetadata = null;
    player.onerror = null;
    isClipPlaying = false;
    audioStopTime = 0;
    audioStartTime = 0;
}

function resetUI() {
    dom.questionContent.innerHTML = `<p class="placeholder">点击「开始游戏」启动一局</p>`;
    dom.audioPlayer.style.display = 'none';
    resetAudio();
    dom.feedbackMsg.textContent = '';
    dom.hintHistory.textContent = '';
    dom.attemptInfo.textContent = '已猜 0 次';
    dom.hintCount.textContent = '提示剩余 3 次';
    dom.timer.textContent = '60s';
    dom.answerInput.value = '';
    dom.answerInput.placeholder = '输入你的答案...';
    dom.endGameBtn.style.display = 'none';
    clearInterval(timerInterval);
}

function enableInputs(enabled) {
    dom.answerInput.disabled = !enabled;
    dom.submitBtn.disabled = !enabled;
    dom.hintBtn.disabled = !enabled;
    if (enabled) dom.answerInput.focus();
}

function startTimer() {
    timeLeft = CONFIG.TIMEOUT;
    dom.timer.textContent = `${timeLeft}s`;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        dom.timer.textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (currentGame && !currentGame.finished) {
                endGame(`时间到！正确答案是：${currentGame.answer}`);
            }
        }
    }, 1000);
}

function endGame(message, isWin = false) {
    if (currentGame && !currentGame.finished) currentGame.finish();
    clearInterval(timerInterval);
    dom.timer.textContent = '已结束';
    enableInputs(false);
    if (message) dom.feedbackMsg.textContent = message;
    resetAudio();
    dom.audioPlayer.style.display = 'none';
    dom.endGameBtn.style.display = 'none';
    currentGame = null;
}

async function startGame() {
    clearInterval(timerInterval);
    resetAudio();
    resetUI();

    const category = dom.category.value;
    const mode = dom.mode.value;
    const dataPath = getDataPaths(category, mode);

    try {
        const dataList = await loadJSON(dataPath);
        if (!Array.isArray(dataList) || dataList.length === 0) {
            dom.feedbackMsg.textContent = `数据为空或格式错误：${dataPath}`;
            return;
        }

        const selected = dataList[Math.floor(Math.random() * dataList.length)];

        let validNames = [];
        if (mode === 'dialogue') {
            const speaker = selected.speaker || '';
            const aliases = selected.aliases || [];
            validNames = [speaker, ...aliases];
        } else {
            const answer = selected.answer || '';
            const aliases = selected.aliases || [];
            validNames = [answer, ...aliases];
        }
        validNames = validNames.map(s => s.toLowerCase().trim()).filter(s => s.length > 0);

        if (validNames.length === 0) {
            dom.feedbackMsg.textContent = '数据缺少 speaker/answer 或 aliases，无法识别答案。';
            console.error('无效数据项：', selected);
            return;
        }

        currentGame = new Game(category, mode, selected, validNames);

        if (mode === 'dialogue') {
            const line = selected.line || '（无台词）';
            dom.questionContent.innerHTML = `<div style="font-size:20px;font-weight:500;color:#ffffff;text-shadow: 2px 2px 0 #000000;">“${line}”</div>
                                             <div style="margin-top:8px;color:#ffffff;text-shadow: 2px 2px 0 #000000;">猜猜这是谁说的？</div>`;
            dom.audioPlayer.style.display = 'none';
        } else {
            dom.questionContent.innerHTML = `<div style="font-size:18px;color:#ffffff;text-shadow: 2px 2px 0 #000000;">请听音乐片段，猜曲名</div>
                                             <div style="font-size:14px;color:#ffffff;text-shadow: 1px 1px 0 #000000;margin-top:4px;">（音频加载后自动播放）</div>`;
            dom.audioPlayer.style.display = 'block';
            if (currentGame.audioPath) {
                await loadAndPlayAudio(currentGame);
            } else {
                dom.feedbackMsg.textContent = '该条目没有音频文件。';
            }
        }

        enableInputs(true);
        startTimer();
        dom.feedbackMsg.textContent = '游戏开始！输入你的答案。';
        dom.hintHistory.textContent = '';
        dom.attemptInfo.textContent = '已猜 0 次';
        dom.hintCount.textContent = `提示剩余 ${CONFIG.MAX_HINTS} 次`;

    } catch (error) {
        dom.feedbackMsg.textContent = `加载数据失败：${error.message}`;
        console.error(error);
    }
}

async function loadAndPlayAudio(game) {
    const player = dom.musicPlayer;
    const audioPath = game.audioPath;

    resetAudio();

    try {
        const head = await fetch(audioPath, { method: 'HEAD' });
        if (!head.ok) {
            dom.feedbackMsg.textContent = `音频文件不存在：${audioPath}`;
            return;
        }
    } catch (e) {
        dom.feedbackMsg.textContent = `无法访问音频：${audioPath}`;
        return;
    }

    player.src = audioPath;
    player.load();

    let totalDuration = 0;
    let fixedStart = 0;
    let fixedClipLen = 5;

    function playFixedClip() {
        if (isClipPlaying) return;
        if (!totalDuration || totalDuration <= 0) {
            dom.feedbackMsg.textContent = '无法获取音频时长。';
            return;
        }
        player.currentTime = fixedStart;
        dom.playPauseBtn.textContent = '⏸ 暂停';
        startAudioPolling(player, fixedStart, fixedClipLen);
        player.play().catch(() => {
            dom.feedbackMsg.textContent = '自动播放被阻止，请手动点击按钮。';
            isClipPlaying = false;
            dom.playPauseBtn.textContent = '▶ 播放片段';
            stopAudioPolling();
        });
    }

    player.onloadedmetadata = () => {
        totalDuration = player.duration;
        if (!totalDuration || totalDuration <= 0) {
            dom.feedbackMsg.textContent = '无法获取音频时长。';
            return;
        }
        fixedClipLen = Math.min(5, totalDuration);
        const maxStart = Math.max(0, totalDuration - fixedClipLen);
        fixedStart = Math.random() * maxStart;
        playFixedClip();
    };

    player.onerror = () => {
        dom.feedbackMsg.textContent = `音频加载失败：${audioPath}`;
    };

    dom.playPauseBtn.onclick = function() {
        if (player.paused) {
            if (!player.src) return;
            playFixedClip();
        } else {
            player.pause();
            isClipPlaying = false;
            dom.playPauseBtn.textContent = '▶ 播放片段';
            stopAudioPolling();
        }
    };
}

function handleSubmit() {
    if (!currentGame || currentGame.finished) {
        dom.feedbackMsg.textContent = '游戏已结束，请重新开始。';
        return;
    }
    const input = dom.answerInput.value.trim();
    if (!input) {
        dom.feedbackMsg.textContent = '请输入答案。';
        return;
    }
    if (currentGame.isTimeout()) {
        endGame(`时间到！正确答案是：${currentGame.answer}`);
        return;
    }

    const userId = 'player';
    const attempts = currentGame.getAttempts(userId);
    if (attempts >= CONFIG.MAX_ATTEMPTS) {
        dom.feedbackMsg.textContent = `你已经猜了 ${CONFIG.MAX_ATTEMPTS} 次，不能再猜了。`;
        return;
    }

    const newAttempts = currentGame.addAttempt(userId);
    dom.attemptInfo.textContent = `已猜 ${newAttempts} 次`;

    const isCorrect = currentGame.checkAnswer(input);
    if (isCorrect) {
        uiAudio.play('right');
        dom.feedbackMsg.innerHTML = `回答正确！答案就是 <strong style="color:#ffffff;text-shadow:2px 2px 0 #000000;">${currentGame.answer}</strong>`;
        endGame(null, true);
    } else {
        uiAudio.play('error');
        dom.feedbackMsg.textContent = `回答错误，再想想～ （已猜 ${newAttempts}/${CONFIG.MAX_ATTEMPTS} 次）`;
        if (newAttempts >= CONFIG.MAX_ATTEMPTS) {
            endGame(`机会用尽，正确答案是：${currentGame.answer}`);
        }
    }
    dom.answerInput.value = '';
}

function handleHint() {
    if (!currentGame || currentGame.finished) {
        dom.feedbackMsg.textContent = '没有进行中的游戏。';
        return;
    }
    if (currentGame.hintUsed >= CONFIG.MAX_HINTS) {
        dom.feedbackMsg.textContent = '本局提示次数已用完。';
        return;
    }
    const hint = currentGame.getHint();
    if (!hint) {
        dom.feedbackMsg.textContent = '答案中没有字母，无法提示。';
        return;
    }
    dom.hintHistory.textContent = `提示：${hint}`;
    dom.hintCount.textContent = `提示剩余 ${CONFIG.MAX_HINTS - currentGame.hintUsed} 次`;
    dom.feedbackMsg.textContent = '提示已显示，请继续猜。';
}

dom.startBtn.addEventListener('click', startGame);
dom.submitBtn.addEventListener('click', handleSubmit);
dom.answerInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleSubmit(); });
dom.hintBtn.addEventListener('click', handleHint);

dom.endGameBtn.addEventListener('click', function() {
    if (currentGame) {
        endGame(`手动结束，正确答案：${currentGame.answer}`);
    }
});

resetUI();
enableInputs(false);
console.log('猜台词/音乐网页版已加载，数据目录：', CONFIG.DATA_BASE);
console.log('UI音效已启用，文件目录：', CONFIG.UI_AUDIO_BASE);