document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            enunciado: "Você está na floresta. O que faz?",
            alternativas: [
                {
                    texto: "Procura um abrigo.",
                    historia: "Você encontra um abrigo seguro e continua sua jornada.",
                    proxima: 1,
                },
                {
                    texto: "Continua andando.",
                    historia: "Você se sente cada vez mais perdido na floresta.",
                    proxima: 2,
                },
            ]
        },
        {
            enunciado: "Você encontra uma caverna. O que faz?",
            alternativas: [
                {
                    texto: "Entra na caverna.",
                    historia: "Quando você entra na caverna, percebe algo no canto escuro, você não sabe o que é. Você decide explorar ou sair.",
                    proxima: 3,
                },
                {
                    texto: "Ignora a caverna.",
                    historia: "Você continua andando e se perde ainda mais na floresta.",
                    proxima: 4,
                },
            ]
        },
        // Adicione as outras perguntas e histórias intermediárias aqui
    ];

    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const telaInicial = document.querySelector(".tela-inicial");
    const caixaHistoria = document.querySelector(".caixa-historia");
    const textoHistoria = document.querySelector(".texto-historia");
    const botaoContinuar = document.querySelector(".continuar-btn");

    let atual = 0;
    let historiaFinal = "";
    let proximaPergunta = null;

    // Iniciar o jogo
    botaoIniciar.addEventListener('click', iniciaJogo);
    // Continuar após uma história intermediária
    botaoContinuar.addEventListener('click', () => {
        if (proximaPergunta !== null) {
            atual = proximaPergunta;
            proximaPergunta = null;
            caixaHistoria.style.display = 'none';
            caixaPerguntas.classList.add("mostrar");
            caixaAlternativas.classList.add("mostrar");
            mostraPergunta();
        }
    });
    // Jogar novamente
    botaoJogarNovamente.addEventListener("click", jogaNovamente);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.remove("mostrar");
        caixaHistoria.style.display = 'none';
        mostraPergunta();
    }

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
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
        historiaFinal += opcaoSelecionada.historia + " ";
        if (opcaoSelecionada.proxima === 'end-win') {
            mostraResultado("Você conseguiu voltar para casa!");
        } else if (opcaoSelecionada.proxima === 'end-lose') {
            mostraResultado("Você se perdeu na floresta.");
        } else {
            proximaPergunta = opcaoSelecionada.proxima;
            caixaPerguntas.classList.remove("mostrar");
            caixaAlternativas.classList.remove("mostrar");
            caixaHistoria.style.display = 'block';
            textoHistoria.textContent = opcaoSelecionada.historia;
        }
    }

    function mostraResultado(mensagem) {
        caixaPerguntas.textContent = mensagem;
        textoResultado.textContent = historiaFinal;
        caixaResultado.classList.add("mostrar");
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaHistoria.style.display = 'none';
    }

    function jogaNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
        telaInicial.style.display = 'block';
    }
});
