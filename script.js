import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDczSaYj3YArZ0R66pl2TjdhokpOUhsBIA",
  authDomain: "eloisa-7ba7a.firebaseapp.com",
  databaseURL: "https://eloisa-7ba7a-default-rtdb.firebaseio.com",
  projectId: "eloisa-7ba7a",
  storageBucket: "eloisa-7ba7a.firebasestorage.app",
  messagingSenderId: "455181616815",
  appId: "1:455181616815:web:4e0b9dcaf3e5c7d97af65a",
  measurementId: "G-J3EV5M3Y5D"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referência ao nó `responses` no Realtime Database
const responsesRef = ref(database, 'responses');

// Adiciona eventos aos botões
document.getElementById('yesButton').addEventListener('click', () => {
  handleResponse('Sim');
});

document.getElementById('noButton').addEventListener('click', () => {
  collectResponse('Não', 'Sem justificativa');
  showIncorrectScreen();
});

document.getElementById('notSure').addEventListener('click', () => {
  handleResponse('Não sei');
});

// Funções
function handleResponse(answer) {
  const justification = document.getElementById('justification').value.trim();
  if (!justification && answer === 'Sim') {
    alert('Você deve justificar sua resposta.');
    return;
  }
  const justificationToSave = justification || 'Nenhuma justificativa fornecida.';
  collectResponse(answer, justificationToSave);
}

function collectResponse(answer, justification) {
  const response = {
    answer,
    justification,
    timestamp: new Date().toISOString()
  };

  push(responsesRef, response)
    .then(() => {
      alert('Resposta salva com sucesso!');
      console.log('Resposta:', response);
    })
    .catch(error => {
      console.error('Erro ao salvar resposta:', error);
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
