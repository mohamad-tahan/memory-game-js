var colors = ["green", "red", "yellow", "blue"];
var sequence = [];
var clickedSequence = [];
var level = 0;
var startGame = false;

function randomSequence() {
    var random = Math.floor(Math.random() * colors.length);
    var randomColor = colors[random];
    //console.log(randomColor);
    sequence.push(randomColor);
    //console.log(sequence);
    document.getElementById(randomColor).style.visibility = "hidden";
    setTimeout(function () {
      document.getElementById(randomColor).style.visibility = "visible";
    }, 300);
    clickedSequence = [];
    level++;
    document.getElementsByTagName("h1")[0].innerHTML = "Level " + level;
    
  }

  function buttonColorChange(currentColor) {
    setTimeout(function () {
      document.getElementById(currentColor).style.backgroundColor = currentColor;
    }, 200);
    document.getElementById(currentColor).style.backgroundColor = "grey";
  }

  function playSound(colorSounds) {
    if (colorSounds == "green") {
      var green = new Audio("assets/green.mp3");
      green.play();
    } else if (colorSounds == "red") {
      var red = new Audio("assets/red.mp3");
      red.play();
    } else if (colorSounds == "blue") {
      var blue = new Audio("assets/blue.mp3");
      blue.play();
    } else if (colorSounds == "yellow") {
      var yellow = new Audio("assets/yellow.mp3");
      yellow.play();
    } else {
      var wrong = new Audio("assets/wrong.mp3");
      wrong.play();
    }
  }

  var button = document.querySelectorAll(".btn");
button.forEach((btn) => {
  btn.addEventListener("click", function handleClick(event) {
    var clickedColor = event.target.id;
    clickedSequence.push(clickedColor);
    playSound(clickedColor);
    buttonColorChange(clickedColor);
    if (startGame == true) {
      checkSequence(clickedSequence.length - 1);
    }
  });
});

  function checkSequence(sq) {
    if (sequence[sq] === clickedSequence[sq]) {
      if (clickedSequence.length === sequence.length) {
        setTimeout(randomSequence, 500);
      }
    } else {
      restart();
    }
  }