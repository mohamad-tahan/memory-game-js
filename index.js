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