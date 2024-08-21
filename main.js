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
    const caixaResultadoBom = document.querySelector(".caixa-resultado-bom");
    const caixaResultadoRuim = document.querySelector(".caixa-resultado-ruim");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const telaInicial = document.querySelector(".tela-inicial");

    let atual = 0;
    let historiaFinal = "";

    botaoIniciar.addEventListener('click', iniciaJogo);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultadoBom.classList.remove("mostrar");
        caixaResultadoRuim.classList.remove("mostrar");
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
        historiaFinal += opcaoSelecionada.afirmacao + " ";
        if (opcaoSelecionada.proxima === 'end-win') {
            mostraResultado("Você conseguiu voltar para casa!", "bom");
        } else if (opcaoSelecionada.proxima === 'end-lose') {
            mostraResultado("Você se perdeu na floresta.", "ruim");
        } else {
            atual = opcaoSelecionada.proxima;
            mostraPergunta();
        }
    }

    function mostraResultado(mensagem, tipo) {
        caixaPerguntas.textContent = mensagem;
        textoResultado.textContent = historiaFinal;
        if (tipo === "bom") {
            caixaResultadoBom.classList.add("mostrar");
        } else if (tipo === "ruim") {
            caixaResultadoRuim.classList.add("mostrar");
        }
        botaoJogarNovamente.addEventListener("click", jogaNovamente);
    }

    function jogaNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultadoBom.classList.remove("mostrar");
        caixaResultadoRuim.classList.remove("mostrar");
        telaInicial.style.display = 'block';
    }
});
