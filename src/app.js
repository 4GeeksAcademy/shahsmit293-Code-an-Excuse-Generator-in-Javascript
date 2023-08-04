/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var person = ["father", "mother", "grandma", "grandfather"];
  var action = ["kicked", "snapped", "minced", "throw"];
  var work = ["homework", "project", "report", "presentation"];
  var time = ["on monday", "on thursday", "on friday", "on sunday"];

  var who = person[Math.floor(Math.random() * person.length)];
  var did = action[Math.floor(Math.random() * action.length)];
  var what = work[Math.floor(Math.random() * work.length)];
  var when = time[Math.floor(Math.random() * time.length)];

  var sentence = `My ${who} ${did} my ${what} ${when}`;
  var text = document.querySelector("#excuseme");
  text.textContent = sentence;
};
