

// Detect button press
var numOfDrums = document.querySelectorAll(".drum").length
for (var i = 0; i < numOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
  makeSound(event.key)
  buttonAnimation(event.key);
});

function handleClick()
{
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function buttonAnimation(currKey)
{
var activeButton = document.querySelector("." + currKey);
activeButton.classList.add("pressed");
setTimeout(function () {activeButton.classList.remove("pressed")}, 100);
}

function makeSound(key)
{
    switch(key)
  {
    case 'w':
          var audio = new Audio("sounds/tom-1.mp3");
          break;
    case 'a':
          var audio = new Audio("sounds/tom-2.mp3");
          break;
    case 's':
          var audio = new Audio("sounds/tom-3.mp3");
          break;
    case 'd':
          var audio = new Audio("sounds/tom-4.mp3");
          break;
    case 'j':
          var audio = new Audio("sounds/snare.mp3");
          break;
    case 'k':
          var audio = new Audio("sounds/crash.mp3");
          break;
    case 'l':
          var audio = new Audio("sounds/kick-bass.mp3");
          break;
    default:
          break;
  }
    audio.play();
}
// var audio = new Audio("sounds/tom-1.mp3");
