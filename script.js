document.getElementById("simBtn").addEventListener("click", function() {
    const justificativa = document.getElementById("justificativa").value;
    if (justificativa.trim() === "") {
        alert("Por favor, justifique sua resposta.");
    } else {
        document.getElementById("message").textContent = "Obrigado por responder!";
    }
});

document.getElementById("naoBtn").addEventListener("click", function() {
    document.querySelector(".container").classList.add("hidden");
    const respostaIncorreta = document.getElementById("respostaIncorreta");
    respostaIncorreta.classList.remove("hidden");

    // Adiciona a classe 'erro' para deixar o fundo vermelho
    document.body.classList.add("erro");

    let contador = 5;
    const contagemElement = document.getElementById("contagem");
    const voltarBtn = document.getElementById("voltarBtn");

    const intervalo = setInterval(function() {
        contador--;
        contagemElement.textContent = contador;

        if (contador === 0) {
            clearInterval(intervalo);
            voltarBtn.classList.remove("hidden");  // Exibe o botão "Voltar"
        }
    }, 1000);
});

document.getElementById("voltarBtn").addEventListener("click", function() {
    document.querySelector(".container").classList.remove("hidden");
    document.getElementById("respostaIncorreta").classList.add("hidden");
    document.getElementById("contagem").textContent = "5";
    document.getElementById("voltarBtn").classList.add("hidden");

    // Remove a classe 'erro' para restaurar o fundo original
    document.body.classList.remove("erro");
});

// Função para mover o botão "Não Sei" para uma posição aleatória
// Função para mover o botão "Não Sei" para uma posição aleatória
function moverBotaoNaoSei() {
    const botaoNaoSei = document.getElementById("naoSeiBtn");

    // Tamanho da tela e do botão
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const larguraBotao = botaoNaoSei.offsetWidth;
    const alturaBotao = botaoNaoSei.offsetHeight;

    // Calcula nova posição dentro dos limites da tela
    const novaPosicaoX = Math.random() * (larguraTela - larguraBotao);
    const novaPosicaoY = Math.random() * (alturaTela - alturaBotao);

    // Aplica a nova posição ao botão
    botaoNaoSei.style.left = `${novaPosicaoX}px`;
    botaoNaoSei.style.top = `${novaPosicaoY}px`;
}

// Adiciona o evento para mover o botão "Não Sei" ao passar o mouse por cima
document.getElementById("naoSeiBtn").addEventListener("mouseover", function () {
    moverBotaoNaoSei();
});
