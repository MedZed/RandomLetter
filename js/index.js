var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
var dance = document.getElementById("everybodydance");
if (contextClass) {
  var context = new contextClass();
} else {
  onError;
}

  var letter = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
function RL(){


    letter = alphabet[Math.floor(Math.random() * alphabet.length)];

    alphabet = alphabet.replace(letter,'');
console.log(letter);
$("#everybodydance").html(letter);
if(alphabet===""){
  $("#everybodydance").html("AGAIN!");
   alphabet = "abcdefghijklmnopqrstuvwxyz";
}
 dance.classList.add("pressed");
  var delay = 200;
  setTimeout(unpress,delay);
}




function unpress() { dance.classList.remove("pressed"); }


dance.addEventListener('click', function(event) {

  RL()
var audio = new Audio('beep.mp3');
audio.play();
  });