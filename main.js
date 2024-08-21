document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            enunciado: "Você está na floresta. O que faz?",
            alternativas: [
                {
                    texto: "Procura um abrigo.",
                    afirmacao: "Você encontra um abrigo seguro e continua sua jornada.",
                    proxima: 1,
                },
                {
                    texto: "Continua andando.",
                    afirmacao: "Você se sente cada vez mais perdido na floresta.",
                    proxima: 2,
                },
            ]
        },
        {
            enunciado: "Você encontra uma caverna. O que faz?",
            alternativas: [
                {
                    texto: "Entra na caverna.",
                    afirmacao: "Dentro da caverna, você encontra uma saída para a floresta.",
                    proxima: 3,
                },
                {
                    texto: "Ignora a caverna.",
                    afirmacao: "Você continua se perdendo na floresta.",
                    proxima: 4,
                },
            ]
        },
        {
            enunciado: "Você chega a uma ponte. O que faz?",
            alternativas: [
                {
                    texto: "Atravesse a ponte.",
                    afirmacao: "Você atravessa a ponte e finalmente volta para casa!",
                    proxima: 'end-win',
                },
                {
                    texto: "Volta para a floresta.",
                    afirmacao: "Você se perde novamente na floresta.",
                    proxima: 'end-lose',
                },
            ]
        }
    ];

    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const telaInicial = document.querySelector(".tela-inicial");

    let atual = 0;
    let historiaFinal = "";
    let jogoIniciado = false;

    botaoIniciar.addEventListener('click', iniciaJogo);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        jogoIniciado = true; // Marcar que o jogo foi iniciado
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
    }

    function mostraPergunta() {
        if (!jogoIniciado) return; // Verificar se o jogo foi iniciado

        if (atual >= perguntas.length) {
            mostraResultado("Você chegou ao fim da jornada.");
            return;
        }
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = '';
        mostraAlternativas(perguntaAtual);
    }

    function mostraAlternativas(pergunta) {
        for (const alternativa of pergunta.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
        caixaPerguntas.classList.add("mostrar");
        caixaAlternativas.classList.add("mostrar");
    }

    function respostaSelecionada(opcaoSelecionada) {
        historiaFinal += opcaoSelecionada.afirmacao + " ";
        if (opcaoSelecionada.proxima === 'end-win') {
            mostraResultado("Você conseguiu voltar para casa!");
        } else if (opcaoSelecionada.proxima === 'end-lose') {
            mostraResultado("Você se perdeu na floresta.");
        } else {
            atual = opcaoSelecionada.proxima;
            mostraPergunta();
        }
    }

    function mostraResultado(mensagem) {
        caixaPerguntas.textContent = mensagem;
        textoResultado.textContent = historiaFinal;
        caixaResultado.classList.add("mostrar");
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        // Remover event listener anterior para evitar múltiplos listeners
        botaoJogarNovamente.removeEventListener("click", jogaNovamente);
        botaoJogarNovamente.addEventListener("click", jogaNovamente);
    }

    function jogaNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
        telaInicial.style.display = 'block';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        jogoIniciado = false; // Marcar que o jogo não foi iniciado
    }
});
