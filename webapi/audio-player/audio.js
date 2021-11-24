"use strict";

// https://www.youtube.com/watch?v=laCjGMhASp8

// html element predefine
const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("piano");
body.append(div);

// piano notes define
const notes = [
  { name: "C", frequency: 261.63 },
  { name: "C#", frequency: 277.18 },
  { name: "D", frequency: 293.66 },
  { name: "D#", frequency: 311.13 },
  { name: "E", frequency: 329.63 },
  { name: "F", frequency: 349.23 },
  { name: "F#", frequency: 369.99 },
  { name: "G", frequency: 392.0 },
  { name: "G#", frequency: 415.3 },
  { name: "A", frequency: 440.0 },
  { name: "A#", frequency: 466.16 },
  { name: "B", frequency: 493.88 },
  { name: "C", frequency: 523.25 },
];

// Web audio api define
const audioContext = new AudioContext();
const primaryGainControl = audioContext.createGain();
// primaryGainControl.gain.setValueAtTime(0.05, 0);
primaryGainControl.connect(audioContext.destination);

notes.forEach(({ name, frequency }) => {
  const noteButton = document.createElement("button");
  noteButton.innerText = name;
  noteButton.setAttribute(
    "style",
    `
    margin:0;
    padding:0;
    position:relative;
    float:left;
    `
  );

  if (noteButton.innerText.indexOf("#") == -1) {
    noteButton.classList.add("white");
    noteButton.setAttribute(
      "style",
      `
        height:16em;
  width:4em;
  z-index:1;
  border-left:1px solid #bbb;
  border-bottom:1px solid #bbb;
  border-radius:0 0 5px 5px;
    `
    );
  } else {
    noteButton.classList.add("black");
    noteButton.style.color = "white";
    noteButton.setAttribute(
      "style",
      `
      height:8em;
  width:2em;
  margin:0 0 0 -1em;
  z-index:2;
  border:1px solid #000;
  border-radius:0 0 3px 3px;
  box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
  background:linear-gradient(45deg,#222 0%,#555 100%)  
      `
    );
  }

  noteButton.addEventListener("click", () => {
    const noteOscillator = audioContext.createOscillator();
    noteOscillator.type = "square";
    noteOscillator.frequency.setValueAtTime(
      frequency,
      audioContext.currentTime
    );

    // vibration
    const vibrato = audioContext.createOscillator();
    vibrato.frequency.setValueAtTime(0, 0);
    const vibratoGain = audioContext.createGain();
    vibratoGain.gain.setValueAtTime(0, 0);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(noteOscillator.frequency);
    vibrato.start();

    // control keyboard and sound speed
    const attackTime = 0.2;
    const decayTime = 0.3;
    const sustainLevel = 0.7;
    const releaseTime = 0.2;

    const now = audioContext.currentTime;
    const noteGain = audioContext.createGain();
    noteGain.gain.setValueAtTime(0, 0);
    noteGain.gain.linearRampToValueAtTime(1, now + attackTime);
    noteGain.gain.linearRampToValueAtTime(
      sustainLevel,
      now + attackTime + decayTime
    );
    noteGain.gain.setValueAtTime(sustainLevel, now + 1 - releaseTime);
    noteGain.gain.linearRampToValueAtTime(0, now + 1);

    noteOscillator.connect(noteGain);
    noteGain.connect(primaryGainControl);
    noteOscillator.start();
    noteOscillator.stop(audioContext.currentTime + 1);
  });
  document.querySelector(".piano").append(noteButton);
});

const piano = document.querySelector(".piano");
piano.setAttribute(
  "style",
  `
  height:18.875em;
  width:34em;
  margin:5em auto;
  padding:3em 0 0 3em;
  position:relative;
  border:1px solid #160801;
  border-radius:1em;
  background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);
  box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5);
  `
);
