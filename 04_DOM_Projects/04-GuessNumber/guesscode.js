// Generating Random Number
const randomNumber=parseInt((Math.random()*100+1));
//console.log(randomNumber);
// Fetching value from Element
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField').value;
const previousGuess=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');