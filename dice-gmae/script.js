 function randomFx () {
image = [
  "dice-gmae/images/dice1.png",
  "dice-gmae/images/dice2.png",
  "dice-gmae/images/dice3.png",
  "dice-gmae/images/dice4.png",
  "dice-gmae/images/dice5.png",
  "dice-gmae/images/dice6.png"
]

var random1= Math.floor(Math.random() * 6) + 1;
var randomImage1= image[random1 - 1];

var random2 = Math.floor(Math.random() * 6) + 1;
var randomImage2= image[random2 - 1];

var getClassFirst = document.querySelector(".img1");
getClassFirst.src = randomImage1;

var getClassSecond = document.querySelector(".img2");
getClassSecond.src =  randomImage2;

if (randomImage2 < randomImage1 ) {
  var cHanger = document.querySelector(".kilo");
  cHanger.innerHTML = "Player 1 wins"
}else if ( randomImage1 < randomImage2) {
  var cHanger2 = document.querySelector(".kilo");
  cHanger2.innerHTML = "Player 2 wins"
} else if ( randomImage1 === randomImage2) {
  var same = document.querySelector(".kilo");
  same.innerHTML = "Thats a draw"
}
}

