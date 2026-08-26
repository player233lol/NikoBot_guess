# QUIZ – TV TIME

A quiz game inspired by Tenna's minigame in Deltarune Chapter 3.

Guess who said a line of dialogue, or identify a track from a short audio clip. Supports Deltarune and Undertale categories, with three languages: English, Chinese, and Japanese.


## Features

- Two categories: Deltarune / Undertale
- Two modes: dialogue (guess the speaker) and music (guess the track)
- Multi-language interface
- 60-second timer, up to 3 attempts and 3 hints per round
- Sound effects and background music with auto-fade
- Responsive on desktop and mobile


## How to Run

Requires Python 3.1 or later.

This repository contains the game code only. audio files are not included and must be prepared separately.

1. Download or clone the repository.
2. Prepare your audio files, and place them in the `data/audio` folder following the structure below.
3. In the project root, run:
*python server.py*
4. The server starts at http://127.0.0.1:1997 and opens your browser.
5. Press Ctrl+C to stop.

For PC, just run quiz.exe

## File Structure

.

├── index.html

├── style.css

├── script.js

├── server.py

├── data/

│ ├── json/

│ │ ├── text_dr.json

│ │ ├── text_ut.json

│ │ ├── music_dr.json

│ │ └── music_ut.json

│ ├── audio/

│ │ ├── dr/

│ │ └── ut/

│ ├── img/

│ └── ui/

└── README.md




## Data Format

### Dialogue JSON (`text_*.json`)
[
  {
    "speaker": "Antenna",
    "aliases": ["(an)tenna", "tenna"],
    "line": "IT'S TV TIME"
  }
]
Music JSON (music_*.json)
[
  {
    "answer": "QUIZ!",
    "aliases": ["QUIZ"],
    "files": ["quiz.MP3"]
  }
]
answer – correct track name

aliases – alternative accepted answers (case-insensitive)

files – list of audio filenames (one chosen randomly); placed under data/audio/<category>/

Customisation
Edit the LANG object in script.js for translations.

Replace UI sounds in data/ui/ (error.ogg, right.ogg, choice.ogg, upload.ogg).

Replace data/ui/music.ogg with your own background track.

Adjust CONFIG in script.js:

const CONFIG = {
  TIMEOUT: 60,
  MAX_ATTEMPTS: 3,
  MAX_HINTS: 3
};

# Dependencies
Python 3 standard library.

# License
source code:CC0
audio files:Toby Fox
