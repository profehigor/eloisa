const responses = JSON.parse(localStorage.getItem('responses')) || [];

document.getElementById('yesButton').addEventListener('click', () => {
    handleResponse('Sim');
});

document.getElementById('notSure').addEventListener('click', () => {
    handleResponse('Não sei');
});

document.getElementById('noButton').addEventListener('click', () => {
    collectResponse('Não', 'Sem justificativa');
    showIncorrectScreen();
});

function handleResponse(answer) {
    const justification = document.getElementById('justification').value.trim();
    if (!justification) {
        alert('Você deve justificar sua resposta.');
        return;
    }
    collectResponse(answer, justification);

    if (answer === 'Sim') {
        alert('Obrigado pela colaboração! Te amo muito.');
    } else if (answer === 'Não sei') {
        alert('Obrigado pela colaboração! Te amo, OK?');
    }
}

function collectResponse(answer, justification) {
    const response = { 
        answer, 
        justification, 
        timestamp: new Date().toISOString() 
    };
    responses.push(response);

    // Armazena no localStorage
    localStorage.setItem('responses', JSON.stringify(responses));

    console.log('Resposta coletada:', response);
}

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
