// Generating Random Number
const randomNumber=parseInt((Math.random()*100+1));
//console.log(randomNumber);
// Fetching value from Element
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField').value;
const previousGuess=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const lowerHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

let numGuess=1;
let prevGuess=[];
// Play Game 
let playGame=true;

//checking whether user allowed to play game or not
if(playGame)
{
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        const guess=parseInt(userInput);
        console.log(guess);
    });
}

// Validate Guess Function

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert("Please Enter a valid number");
    }
    else if(guess<1)
    {
        alert("Please Enter a number more than one");
    }
    else if(guess>100)
    {
        alert("Please Enter a number less than 100");
    }
    else{
         prevGuess.push(guess);
         if(numGuess >10)
         {
            displayGuess(guess);
            displayMessage(`Game Over,Random Numer was${randomNumber}`);
            endGame();
         }
         else{
            displayGuess(guess);
            checkGuess(guess);
         }
        
    }
}

// 
function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMessage(`You guess it right`);
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Number is toooo low.`);
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Number is toooo High.`);
    }
}

function displayGuess(guess)
{
    userInput='';
    previousGuess.innerHTML +='${guess}';
    numGuess++;
    lastResult.innerHTML=`${11-numGuess}`;
}

function displayMessage(message)
{
    lowOrHi.innerHTML= `<span>${message}</span>`;
}

function endGame()
{

}

function newGame(){}