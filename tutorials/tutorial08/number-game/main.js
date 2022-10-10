// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;
let guessCount = 0;


function check() {
    guessCount++;
    document.querySelector('#num-guesses').innerHTML = 'Your amount of guesses: ' + guessCount;
    // your code here.
    // 1. get the number they've entered from the DOM.
    //    store that in a variable.
    let guess = document.querySelector('#guess').value;
    // 2. Convert the guess to a number.
    guess = Number(guess);
    document.querySelector('#message').innerHTML = '';
    // 3. Check if they won:
    //    * if guess === secret -> You win!
    //    * if guess < secret -> Too low!
    //    * otherwise: Too high!
    if (guess === secret) {
        console.log('we win');
        document.querySelector('#celebrate').className = 'none';
        document.querySelector('#message').innerHTML = 'You win!';
    } else if (guess < secret) {
        console.log('Your guess was too low');
        document.querySelector('#message').innerHTML = 'Your guess was too low';
    } else if (guess > secret) {
        console.log('your guess is too high')
        document.querySelector('#message').innerHTML = 'Your guess was too high';

    }
}