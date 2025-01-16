// Configuração do Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const responses = JSON.parse(localStorage.getItem('responses')) || [];

// Manipula os botões e coleta as respostas
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

    // Armazena no localStorage como backup
    localStorage.setItem('responses', JSON.stringify(responses));

    // Envia as respostas para o Firebase
    firebase.database().ref('responses').push(response)
        .then(() => {
            console.log('Resposta enviada ao servidor:', response);
        })
        .catch(error => {
            console.error('Erro ao enviar resposta:', error);
        });
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
