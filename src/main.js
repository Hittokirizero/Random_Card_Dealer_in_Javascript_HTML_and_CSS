/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let simb = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  let z = Math.floor(Math.random() * simb.length);
  let topx = simb[z];
  let centerx = numb[Math.floor(Math.random() * numb.length)];
  let bottomx = simb[z];
  document.querySelector("#top").innerHTML = topx;
  document.querySelector("#center").innerHTML = centerx;
  document.querySelector("#bottom").innerHTML = bottomx;
};
