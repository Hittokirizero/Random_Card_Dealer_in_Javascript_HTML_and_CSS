/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let simb = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  let z = Math.floor(Math.random() * simb.length);
  let colorx = "";
  if (z == 3 || z == 2) {
    colorx = "color:red;";
  } else {
    colorx = "color:black;";
  }
  let topx = simb[z];
  let centerx = numb[Math.floor(Math.random() * numb.length)];
  let bottomx = simb[z];
  document.querySelector("#top").innerHTML = topx;
  document.querySelector("#center").innerHTML = centerx;
  document.querySelector("#bottom").innerHTML = bottomx;
  const change_color1 = document.querySelector(" .change_color1");
  change_color1.style = colorx;
  const change_color2 = document.querySelector(" .change_color2");
  change_color2.style = colorx + "transform: rotate(180deg);";
};
