let guessCounter = document.getElementById('guessCounter');
let errorText = document.getElementById('errorText');
let hintText = document.getElementById('hintText');
let winnerText = document.getElementById('winnerText');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let guessLeft = 5;
let ans = Math.floor(Math.random() * 30) + 1;

submit.onclick = function() {
    let userGuess = Number(document.getElementById('userGuess').value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 30) {
        errorText.textContent = 'Error: Enter a valid input!';
        return;
    } else {
        errorText.textContent = 'Error: None';
    }

    guessCounter.textContent = --guessLeft;
    
    if (ans === userGuess) {
        hintText.textContent = "Hint: Number Guessed is Correct!";
        winnerText.textContent = "You Won! Congratulations!";
        submit.disabled = true;
        return;
    } else if (userGuess < ans) {
        hintText.textContent = "Hint: Number Guessed is Low!";
    } else {
        hintText.textContent = "Hint: Number Guessed is High!";
    }

    if (guessLeft === 0) {
        winnerText.textContent = "You Lost! The correct number was " + ans + ". Better try again...";
        submit.disabled = true;
    }
}

reset.onclick = function() {
    guessLeft = 5;
    guessCounter.textContent = guessLeft;
    ans = Math.floor(Math.random() * 20) + 1;
    errorText.textContent = 'Error: None';
    hintText.textContent = 'Hint: Guess a Number between 1 to 30';
    winnerText.textContent = '';
    document.getElementById('userGuess').value = '';
    submit.disabled = false;
}
