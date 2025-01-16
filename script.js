document.getElementById('yesButton').addEventListener('click', () => {
    const justification = document.getElementById('justification').value.trim();
    if (!justification) {
        alert('Você deve justificar sua resposta.');
        return;
    }
    alert('Obrigado pela colaboração! Te amo muito.');
});

document.getElementById('notSure').addEventListener('click', () => {
    const justification = document.getElementById('justification').value.trim();
    if (!justification) {
        alert('Você deve justificar sua resposta.');
        return;
    }
    alert('Obrigado pela colaboração! Te amo, OK?');
});

document.getElementById('noButton').addEventListener('click', () => {
    showIncorrectScreen();
});



function showIncorrectScreen() {
    const incorrectScreen = document.getElementById('incorrect-screen');
    incorrectScreen.style.display = 'flex';

    let countdown = 5;
    const countdownSpan = document.getElementById('countdown');
    countdownSpan.textContent = countdown;

    const interval = setInterval(() => {
        countdown--;
        countdownSpan.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            incorrectScreen.style.display = 'none';
        }
    }, 1000);
}
document.getElementById('yesButton').addEventListener('click', () => {
    const justification = document.getElementById('justification').value.trim();
    if (!justification) {
        alert('Você deve justificar sua resposta.');
        return;
    }
    alert('Obrigado pela colaboração! Te amo muito.');
});

document.getElementById('notSure').addEventListener('click', () => {
    const justification = document.getElementById('justification').value.trim();
    if (!justification) {
        alert('Você deve justificar sua resposta.');
        return;
    }
    alert('Obrigado pela colaboração! Te amo, OK?');
});

document.getElementById('noButton').addEventListener('click', () => {
    showIncorrectScreen();
});



function showIncorrectScreen() {
    const incorrectScreen = document.getElementById('incorrect-screen');
    incorrectScreen.style.display = 'flex';

    let countdown = 5;
    const countdownSpan = document.getElementById('countdown');
    countdownSpan.textContent = countdown;

    const interval = setInterval(() => {
        countdown--;
        countdownSpan.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            incorrectScreen.style.display = 'none';
        }
    }, 1000);
}
