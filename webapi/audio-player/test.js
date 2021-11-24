"use strict";

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

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("piano");
body.append(div);

notes.forEach(({ name, frequency }) => {
  const noteButton = document.createElement("button");
  noteButton.innerText = name;
  noteButton.style.width = "10px";
  noteButton.style.height = "50px";

  if (noteButton.innerText.indexOf("#") != -1) {
    noteButton.style.backgroundColor = "black";
    noteButton.style.color = "white";
  }

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
  box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5)
  `
);

const buttons = document.querySelector(".piano button:nth-child(3)");
buttons.style.color = "red";
