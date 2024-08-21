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
                    afirmacao: "Dentro da caverna, você percebe algo no canto escuro. Você vai explorar ou sair da caverna?",
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
            enunciado: "Você entra na caverna e vê algo no canto escuro. O que faz?",
            alternativas: [
                {
                    texto: "Explora o canto escuro.",
                    afirmacao: "Você encontra uma saída secreta da caverna e continua sua jornada.",
                    proxima: 5,
                },
                {
                    texto: "Sai da caverna.",
                    afirmacao: "Você retorna para a floresta.",
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
        },
        // Adicione mais perguntas aqui, mantendo a lógica de progressão
    ];

    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const botaoContinue = document.querySelector(".continue-btn");
    const telaInicial = document.querySelector(".tela-inicial");

    let atual = 0;
    let historiaFinal = "";

    botaoIniciar.addEventListener('click', iniciaJogo);
    botaoContinue.addEventListener('click', continuaJogo);
    botaoJogarNovamente.addEventListener('click', jogaNovamente);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
    }

    function continuaJogo() {
        mostraPergunta();
        caixaResultado.classList.remove("mostrar");
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
        historiaFinal += opcaoSelecionada.afirmacao + " ";
        if (opcaoSelecionada.proxima === 'end-win') {
            mostraResultado("Você conseguiu voltar para casa!");
        } else if (opcaoSelecionada.proxima === 'end-lose') {
            mostraResultado("Você se perdeu na floresta.");
        } else {
            atual = opcaoSelecionada.proxima;
            caixaPerguntas.textContent = opcaoSelecionada.afirmacao;
            caixaAlternativas.innerHTML = '';
            caixaResultado.classList.add("mostrar");
        }
    }

    function mostraResultado(mensagem) {
        textoResultado.textContent = mensagem;
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.add("mostrar");
    }

    function jogaNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
        telaInicial.style.display = 'block';
    }
});
