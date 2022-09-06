// generating 2 random no. for 2 images
var i = Math.floor(Math.random() * 6 + 1);
var j = Math.floor(Math.random() * 6 + 1);

// query selector

var win = document.querySelector("h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// setting dice images using random no. names of images(dice1-dice6).png

img1.setAttribute("src", "/images/dice" + i + ".png");
img2.setAttribute("src", "/images/dice" + j + ".png");

// decides winner
if (i > j) {
  win.innerText = " 🚩 Player 1 wins";
} else if (i === j) {
  win.innerText = "Draw!";
} else {
  win.innerText = "Player 2 wins 🚩";
}
