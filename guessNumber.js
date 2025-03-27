let randomNumber = Math.floor(Math.random() * 100) + 1;
let gameWon = false;

function checkGuess() {
    if (gameWon) return;
    
    let userGuess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage("Bitte gib eine gültige Zahl zwischen 1 und 100 ein!", "red");
        return;
    }

    if (userGuess < randomNumber) {
        showMessage("⬇️ Zu niedrig! Versuche es erneut.", "orange");
    } else if (userGuess > randomNumber) {
        showMessage("⬆️ Zu hoch! Versuche es erneut.", "orange");
    } else {
        showMessage("🎉 Glückwunsch! Du hast die Zahl erraten! 🎉", "green");
        document.body.classList.add("win-effect");
        gameWon = true;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    gameWon = false;
    document.getElementById('guess').value = "";
    document.body.classList.remove("win-effect");
    showMessage("Eine neue Zahl wurde generiert! Versuche es erneut.", "black");
}

function showMessage(text, color) {
    let message = document.getElementById('message');
    message.textContent = text;
    message.style.color = color;
    message.classList.add("fade-in");
    
    setTimeout(() => {
        if (!gameWon) {
            message.textContent = "";
        }
        message.classList.remove("fade-in");
    }, 2000);
}