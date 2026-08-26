const LANG = {
    en: {
        title: 'QUIZ!!!',
        label_category: 'Category:',
        label_mode: 'Mode:',
        opt_dr: 'Deltarune',
        opt_ut: 'Undertale',
        opt_dialogue: 'Lines',
        opt_music: 'Music',
        btn_start: 'Start Game',
        placeholder_question: 'Click "Start Game" to begin',
        btn_play: '▶ Play Clip',
        btn_pause: '⏸ Pause',
        hint_audio: 'Listen to the clip and guess the track!',
        input_placeholder: 'Enter your answer...',
        btn_submit: 'Submit',
        btn_hint: 'Hint',
        btn_end: 'End Game',
        status_attempts: 'Guesses: {count}',
        status_hints: 'Hints left: {count}',
        status_timer: '{seconds}s',
        feedback_start: 'Game started! Enter your answer.',
        feedback_data_error: 'Data error: {path}',
        feedback_invalid_data: 'Invalid data (missing speaker/answer).',
        feedback_audio_not_found: 'Audio not found: {path}',
        feedback_audio_unreachable: 'Cannot access audio: {path}',
        feedback_audio_blocked: 'Autoplay blocked, click the button.',
        feedback_no_audio: 'No audio file for this entry.',
        feedback_no_game: 'No game in progress.',
        feedback_hint_used_up: 'No hints left for this round.',
        feedback_no_letters: 'No letters in answer, cannot hint.',
        feedback_hint_shown: 'Hint shown, keep guessing.',
        feedback_max_attempts: 'You\'ve guessed {max} times, no more.',
        feedback_correct: 'Correct! The answer is <strong>{answer}</strong>',
        feedback_wrong: 'Wrong, try again. ({attempts}/{max})',
        feedback_out_of_chances: 'Out of chances. Answer: {answer}',
        feedback_timeout: 'Time\'s up! Answer: {answer}',
        feedback_game_ended: 'Game ended, start a new one.',
        feedback_enter_answer: 'Please enter an answer.',
        feedback_guess_who: 'Guess who said this?',
        feedback_music_guess: 'Listen and guess the track name.',
        feedback_clip_finished: 'Clip finished, click to replay.',
        hint_prefix: 'Hint: {hint}',
        game_over_timeout: 'Time\'s up! Answer: {answer}',
        game_over_out_of_chances: 'Out of chances. Answer: {answer}',
    },
    zh: {
        title: '问答时间!!!',
        label_category: '分类：',
        label_mode: '模式：',
        opt_dr: 'Deltarune',
        opt_ut: 'Undertale',
        opt_dialogue: '台词',
        opt_music: '音乐',
        btn_start: '开始游戏',
        placeholder_question: '点击「开始游戏」开始一局',
        btn_play: '▶ 播放片段',
        btn_pause: '⏸ 暂停',
        hint_audio: '听片段猜曲名！',
        input_placeholder: '输入你的答案...',
        btn_submit: '提交',
        btn_hint: '提示',
        btn_end: '结束游戏',
        status_attempts: '已猜 {count} 次',
        status_hints: '提示剩余 {count} 次',
        status_timer: '{seconds}秒',
        feedback_start: '游戏开始！输入你的答案。',
        feedback_data_error: '数据错误：{path}',
        feedback_invalid_data: '数据无效（缺少 speaker/answer）。',
        feedback_audio_not_found: '找不到音频：{path}',
        feedback_audio_unreachable: '无法访问音频：{path}',
        feedback_audio_blocked: '自动播放被阻止，请点击按钮。',
        feedback_no_audio: '该条目没有音频文件。',
        feedback_no_game: '没有进行中的游戏。',
        feedback_hint_used_up: '本局提示已用完。',
        feedback_no_letters: '答案中没有字母，无法提示。',
        feedback_hint_shown: '提示已显示，继续猜吧！',
        feedback_max_attempts: '你已经猜了 {max} 次，不能再猜了。',
        feedback_correct: '回答正确！答案是 <strong>{answer}</strong>',
        feedback_wrong: '不对，再想想～ （已猜 {attempts}/{max} 次）',
        feedback_out_of_chances: '机会用尽，答案是：{answer}',
        feedback_timeout: '时间到！答案是：{answer}',
        feedback_game_ended: '游戏已结束，请重新开始。',
        feedback_enter_answer: '请输入答案。',
        feedback_guess_who: '猜猜这是谁说的？',
        feedback_music_guess: '听片段猜曲名。',
        feedback_clip_finished: '片段播放完毕，点击可重听。',
        hint_prefix: '提示：{hint}',
        game_over_timeout: '时间到！答案是：{answer}',
        game_over_out_of_chances: '机会用尽，答案是：{answer}',
    },
    ja: {
        title: 'クイズ!!!',
        label_category: 'カテゴリ：',
        label_mode: 'モード：',
        opt_dr: 'Deltarune',
        opt_ut: 'Undertale',
        opt_dialogue: 'セリフ',
        opt_music: '音楽',
        btn_start: 'ゲーム開始',
        placeholder_question: '「ゲーム開始」をクリック',
        btn_play: '▶ 再生',
        btn_pause: '⏸ 一時停止',
        hint_audio: '曲を当ててね！',
        input_placeholder: '答えを入力...',
        btn_submit: '送信',
        btn_hint: 'ヒント',
        btn_end: '終了',
        status_attempts: '試行 {count} 回',
        status_hints: 'ヒント残り {count} 回',
        status_timer: '{seconds}秒',
        feedback_start: 'ゲーム開始！答えを入力してね。',
        feedback_data_error: 'データエラー：{path}',
        feedback_invalid_data: 'データが不正（speaker/answer がありません）。',
        feedback_audio_not_found: '音声が見つかりません：{path}',
        feedback_audio_unreachable: '音声にアクセスできません：{path}',
        feedback_audio_blocked: '自動再生がブロックされました。ボタンを押してね。',
        feedback_no_audio: 'このエントリには音声ファイルがありません。',
        feedback_no_game: 'ゲームが進行中ではありません。',
        feedback_hint_used_up: 'ヒントはもう使えません。',
        feedback_no_letters: '答えにアルファベットがないのでヒントを出せません。',
        feedback_hint_shown: 'ヒントを表示したよ！続けてね。',
        feedback_max_attempts: 'もう {max} 回も試したよ、これ以上は無理。',
        feedback_correct: '正解！答えは <strong>{answer}</strong> だよ！',
        feedback_wrong: '違うよ、もう一度考えて～（{attempts}/{max} 回）',
        feedback_out_of_chances: 'チャンス切れ。答え：{answer}',
        feedback_timeout: '時間切れ！答え：{answer}',
        feedback_game_ended: 'ゲーム終了、新しく始めてね。',
        feedback_enter_answer: '答えを入力してね。',
        feedback_guess_who: '誰のセリフ？',
        feedback_music_guess: '曲名を当ててね。',
        feedback_clip_finished: '再生終了、もう一度再生できるよ。',
        hint_prefix: 'ヒント：{hint}',
        game_over_timeout: '時間切れ！答え：{answer}',
        game_over_out_of_chances: 'チャンス切れ。答え：{answer}',
    }
};

const CONFIG = {
    DATA_BASE: 'data/json/',
    AUDIO_BASE: 'data/audio/',
    UI_AUDIO_BASE: 'data/ui/',
    TIMEOUT: 60,
    MAX_ATTEMPTS: 3,
    MAX_HINTS: 3,
};

let currentLang = localStorage.getItem('quiz_lang') || 'en';

function t(key, params = {}) {
    const dict = LANG[currentLang] || LANG.en;
    let text = dict[key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
}

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
            audio.volume = 0.8;
            if (key === 'right' || key === 'error') {
                audio.volume = 1.0;
            }
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
        const elements = document.querySelectorAll('button, select');
        elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.play('choice');
            });
            el.addEventListener('click', () => {
                this.play('upload');
            });
        });
    }
}

const bgMusic = document.getElementById('bgMusic');
let bgFadeInterval = null;
let bgTargetVolume = 1;
let bgCurrentVolume = 1;

function fadeBgMusic(targetVol, duration = 100) {
    if (bgFadeInterval) {
        clearInterval(bgFadeInterval);
        bgFadeInterval = null;
    }
    if (!bgMusic) return;
    bgTargetVolume = Math.max(0, Math.min(1, targetVol));
    const step = 20;
    const totalSteps = duration / step;
    let currentStep = 0;
    const startVol = bgCurrentVolume;
    bgFadeInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / totalSteps;
        const newVol = startVol + (bgTargetVolume - startVol) * progress;
        bgCurrentVolume = Math.max(0, Math.min(1, newVol));
        bgMusic.volume = bgCurrentVolume;
        if (currentStep >= totalSteps) {
            clearInterval(bgFadeInterval);
            bgFadeInterval = null;
            bgCurrentVolume = bgTargetVolume;
            bgMusic.volume = bgCurrentVolume;
            if (bgTargetVolume === 0) {
                bgMusic.pause();
            } else {
                bgMusic.play().catch(() => {});
            }
        }
    }, step);
}

function startBgMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 1;
    bgCurrentVolume = 1;
    bgMusic.play().catch(() => {});
}

document.addEventListener('click', () => {
    if (bgMusic.paused && bgMusic.src) {
        startBgMusic();
    }
}, { once: false });

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
            dom.playPauseBtn.textContent = t('btn_play');
            dom.feedbackMsg.textContent = t('feedback_clip_finished');
            clearInterval(audioPollInterval);
            audioPollInterval = null;
            fadeBgMusic(1, 100);
        }
    }, 100);
}

function resetAudio() {
    const player = dom.musicPlayer;
    stopAudioPolling();
    player.pause();
    player.src = '';
    player.load();
    dom.playPauseBtn.textContent = t('btn_play');
    player.onloadedmetadata = null;
    player.onerror = null;
    isClipPlaying = false;
    audioStopTime = 0;
    audioStartTime = 0;
    fadeBgMusic(1, 100);
}

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = t(key);
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) {
            el.placeholder = t(key);
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    if (currentGame) {
        updateStatus();
    } else {
        dom.attemptInfo.textContent = t('status_attempts', { count: 0 });
        dom.hintCount.textContent = t('status_hints', { count: CONFIG.MAX_HINTS });
        dom.timer.textContent = t('status_timer', { seconds: CONFIG.TIMEOUT });
    }
    const currentText = dom.playPauseBtn.textContent;
    const playKey = t('btn_play');
    const pauseKey = t('btn_pause');
    if (currentText.includes('暂停') || currentText.includes('Pause') || currentText.includes('一時停止') || currentText === '⏸ 暂停' || currentText === '⏸ Pause' || currentText === '⏸ 一時停止') {
        dom.playPauseBtn.textContent = pauseKey;
    } else {
        dom.playPauseBtn.textContent = playKey;
    }
}

function updateStatus() {
    if (!currentGame) {
        dom.attemptInfo.textContent = t('status_attempts', { count: 0 });
        dom.hintCount.textContent = t('status_hints', { count: CONFIG.MAX_HINTS });
        dom.timer.textContent = t('status_timer', { seconds: CONFIG.TIMEOUT });
        return;
    }
    const userId = 'player';
    const attempts = currentGame.getAttempts(userId);
    dom.attemptInfo.textContent = t('status_attempts', { count: attempts });
    dom.hintCount.textContent = t('status_hints', { count: CONFIG.MAX_HINTS - currentGame.hintUsed });
}

function resetUI() {
    dom.questionContent.innerHTML = `<p class="placeholder">${t('placeholder_question')}</p>`;
    dom.audioPlayer.style.display = 'none';
    resetAudio();
    dom.feedbackMsg.textContent = '';
    dom.hintHistory.textContent = '';
    dom.attemptInfo.textContent = t('status_attempts', { count: 0 });
    dom.hintCount.textContent = t('status_hints', { count: CONFIG.MAX_HINTS });
    dom.timer.textContent = t('status_timer', { seconds: CONFIG.TIMEOUT });
    dom.answerInput.value = '';
    dom.answerInput.placeholder = t('input_placeholder');
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
    dom.timer.textContent = t('status_timer', { seconds: timeLeft });
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        dom.timer.textContent = t('status_timer', { seconds: timeLeft });
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (currentGame && !currentGame.finished) {
                endGame(t('game_over_timeout', { answer: currentGame.answer }));
            }
        }
    }, 1000);
}

function endGame(message, isWin = false) {
    if (currentGame && !currentGame.finished) currentGame.finish();
    clearInterval(timerInterval);
    dom.timer.textContent = t('status_timer', { seconds: 0 });
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
            dom.feedbackMsg.textContent = t('feedback_data_error', { path: dataPath });
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
            dom.feedbackMsg.textContent = t('feedback_invalid_data');
            console.error('Invalid data item:', selected);
            return;
        }

        currentGame = new Game(category, mode, selected, validNames);

        if (mode === 'dialogue') {
            const line = selected.line || '（无台词）';
            dom.questionContent.innerHTML = `<div style="font-size:20px;font-weight:500;color:#ffffff;text-shadow: 2px 2px 0 #000000;">“${line}”</div>
                                             <div style="margin-top:8px;color:#ffffff;text-shadow: 2px 2px 0 #000000;">${t('feedback_guess_who')}</div>`;
            dom.audioPlayer.style.display = 'none';
        } else {
            dom.questionContent.innerHTML = `<div style="font-size:18px;color:#ffffff;text-shadow: 2px 2px 0 #000000;">${t('feedback_music_guess')}</div>
                                             <div style="font-size:14px;color:#ffffff;text-shadow: 1px 1px 0 #000000;margin-top:4px;">${t('hint_audio')}</div>`;
            dom.audioPlayer.style.display = 'block';
            if (currentGame.audioPath) {
                await loadAndPlayAudio(currentGame);
            } else {
                dom.feedbackMsg.textContent = t('feedback_no_audio');
            }
        }

        enableInputs(true);
        startTimer();
        dom.feedbackMsg.textContent = t('feedback_start');
        dom.hintHistory.textContent = '';
        dom.attemptInfo.textContent = t('status_attempts', { count: 0 });
        dom.hintCount.textContent = t('status_hints', { count: CONFIG.MAX_HINTS });

    } catch (error) {
        dom.feedbackMsg.textContent = t('feedback_data_error', { path: error.message });
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
            dom.feedbackMsg.textContent = t('feedback_audio_not_found', { path: audioPath });
            return;
        }
    } catch (e) {
        dom.feedbackMsg.textContent = t('feedback_audio_unreachable', { path: audioPath });
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
        fadeBgMusic(0, 100);
        player.currentTime = fixedStart;
        dom.playPauseBtn.textContent = t('btn_pause');
        startAudioPolling(player, fixedStart, fixedClipLen);
        player.play().catch(() => {
            dom.feedbackMsg.textContent = t('feedback_audio_blocked');
            isClipPlaying = false;
            dom.playPauseBtn.textContent = t('btn_play');
            stopAudioPolling();
            fadeBgMusic(1, 100);
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
        dom.feedbackMsg.textContent = t('feedback_audio_not_found', { path: audioPath });
        fadeBgMusic(1, 100);
    };

    dom.playPauseBtn.onclick = function() {
        if (player.paused) {
            if (!player.src) return;
            if (bgMusic.paused) startBgMusic();
            playFixedClip();
        } else {
            player.pause();
            isClipPlaying = false;
            dom.playPauseBtn.textContent = t('btn_play');
            stopAudioPolling();
            fadeBgMusic(1, 100);
        }
    };
}

function handleSubmit() {
    if (!currentGame || currentGame.finished) {
        dom.feedbackMsg.textContent = t('feedback_game_ended');
        return;
    }
    const input = dom.answerInput.value.trim();
    if (!input) {
        dom.feedbackMsg.textContent = t('feedback_enter_answer');
        return;
    }
    if (currentGame.isTimeout()) {
        endGame(t('game_over_timeout', { answer: currentGame.answer }));
        return;
    }

    const userId = 'player';
    const attempts = currentGame.getAttempts(userId);
    if (attempts >= CONFIG.MAX_ATTEMPTS) {
        dom.feedbackMsg.textContent = t('feedback_max_attempts', { max: CONFIG.MAX_ATTEMPTS });
        return;
    }

    const newAttempts = currentGame.addAttempt(userId);
    dom.attemptInfo.textContent = t('status_attempts', { count: newAttempts });

    const isCorrect = currentGame.checkAnswer(input);
    if (isCorrect) {
        uiAudio.play('right');
        dom.feedbackMsg.innerHTML = t('feedback_correct', { answer: currentGame.answer });
        endGame(null, true);
    } else {
        uiAudio.play('error');
        dom.feedbackMsg.textContent = t('feedback_wrong', { attempts: newAttempts, max: CONFIG.MAX_ATTEMPTS });
        if (newAttempts >= CONFIG.MAX_ATTEMPTS) {
            endGame(t('game_over_out_of_chances', { answer: currentGame.answer }));
        }
    }
    dom.answerInput.value = '';
}

function handleHint() {
    if (!currentGame || currentGame.finished) {
        dom.feedbackMsg.textContent = t('feedback_no_game');
        return;
    }
    if (currentGame.hintUsed >= CONFIG.MAX_HINTS) {
        dom.feedbackMsg.textContent = t('feedback_hint_used_up');
        return;
    }
    const hint = currentGame.getHint();
    if (!hint) {
        dom.feedbackMsg.textContent = t('feedback_no_letters');
        return;
    }
    dom.hintHistory.textContent = t('hint_prefix', { hint: hint });
    dom.hintCount.textContent = t('status_hints', { count: CONFIG.MAX_HINTS - currentGame.hintUsed });
    dom.feedbackMsg.textContent = t('feedback_hint_shown');
}

function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('quiz_lang', lang);
    applyLanguage();
    if (currentGame && !currentGame.finished) {
        const mode = currentGame.mode;
        if (mode === 'dialogue') {
            const line = currentGame.dataItem.line || '（无台词）';
            dom.questionContent.innerHTML = `<div style="font-size:20px;font-weight:500;color:#ffffff;text-shadow: 2px 2px 0 #000000;">“${line}”</div>
                                             <div style="margin-top:8px;color:#ffffff;text-shadow: 2px 2px 0 #000000;">${t('feedback_guess_who')}</div>`;
        } else {
            dom.questionContent.innerHTML = `<div style="font-size:18px;color:#ffffff;text-shadow: 2px 2px 0 #000000;">${t('feedback_music_guess')}</div>
                                             <div style="font-size:14px;color:#ffffff;text-shadow: 1px 1px 0 #000000;margin-top:4px;">${t('hint_audio')}</div>`;
        }
        const hintText = document.querySelector('.hint-text');
        if (hintText) hintText.textContent = t('hint_audio');
    }
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

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        setLanguage(this.dataset.lang);
    });
});

applyLanguage();
resetUI();
enableInputs(false);

setTimeout(() => {
    startBgMusic();
}, 1000);

console.log('Quiz loaded, language:', currentLang);
