

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;

var loss = 0;

var guesses = 10;

reset();

var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log(computerGuess);
var guessarray = [];

function reset() {
	var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];

	win = 0;
	loss = 0;
	guesses = 10;
	guessarray = []; 

}


function newletter() {
	var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}



document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).
	toLowerCase();

	document.getElementById("wins").innerHTML = win; 

	document.getElementById("losses").innerHTML = loss; 

	document.getElementById("left").innerHTML = guesses;

    guessarray.push(userGuess);
    document.getElementById("usedguesses").innerHTML = guessarray;


if ((userGuess) === (computerGuess)) {
          win++, guesses--;
          newletter();

}
 else {
          loss++, guesses--;
          }



if ((guesses) === (0)) {
	reset();

}
}









