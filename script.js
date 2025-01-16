// Importar o Firebase e inicializar
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Configuração do Firebase (insira suas credenciais aqui)
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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referência ao nó de respostas no Realtime Database
const responsesRef = ref(database, 'responses');

// Adicionando evento para o botão "Sim"
document.getElementById('yesButton').addEventListener('click', () => {
  const justification = document.getElementById('justification').value.trim();
  if (!justification) {
    alert('Você deve justificar sua resposta.');
    return;
  }

  // Salvar resposta no Firebase
  saveResponse('Sim', justification);
  alert('Obrigado pela colaboração! Te amo muito.');
});

// Adicionando evento para o botão "Não sei"
document.getElementById('notSure').addEventListener('click', () => {
  const justification = document.getElementById('justification').value.trim();
  if (!justification) {
    alert('Você deve justificar sua resposta.');
    return;
  }

  // Salvar resposta no Firebase
  saveResponse('Não sei', justification);
  alert('Obrigado pela colaboração! Te amo, OK?');
});

// Adicionando evento para o botão "Não"
document.getElementById('noButton').addEventListener('click', () => {
  saveResponse('Não', 'Sem justificativa');
  showIncorrectScreen();
});

// Função para salvar respostas no Firebase
function saveResponse(answer, justification) {
  const response = {
    answer,
    justification,
    timestamp: new Date().toISOString(),
  };

  push(responsesRef, response)
    .then(() => {
      console.log('Resposta salva com sucesso:', response);
    })
    .catch((error) => {
      console.error('Erro ao salvar resposta:', error);
    });
}

// Função para exibir a tela "incorreta"
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
