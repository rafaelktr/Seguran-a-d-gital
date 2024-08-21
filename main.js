// main.js

document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            enunciado: "Você está na floresta. O que faz?",
            alternativas: [
                {
                    texto: "Procura um abrigo.",
                    historia: "Você encontra um abrigo seguro e continua sua jornada. À medida que explora, encontra uma caverna. O que faz?",
                    proxima: 1,
                },
                {
                    texto: "Continua andando.",
                    historia: "Você se sente cada vez mais perdido na floresta. Encontra um caminho dividido. Para onde vai?",
                    proxima: 2,
                },
            ]
        },
        {
            enunciado: "Você encontra uma caverna. O que faz?",
            alternativas: [
                {
                    texto: "Entra na caverna.",
                    historia: "Dentro da caverna, você encontra uma figura sombria no canto escuro. Você decide:",
                    proxima: 3,
                },
                {
                    texto: "Ignora a caverna.",
                    historia: "Você continua se perdendo na floresta e encontra uma clareira. O que faz?",
                    proxima: 4,
                },
            ]
        },
        // ... mais perguntas e alternativas
    ];

    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaHistoria = document.querySelector(".caixa-historia");
    const textoHistoria = document.querySelector(".texto-historia");
    const botaoContinuar = document.querySelector(".continuar-btn");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const telaInicial = document.querySelector(".tela-inicial");

    let atual = 0;
    let historiaFinal = "";

    botaoIniciar.addEventListener('click', iniciaJogo);
    botaoContinuar.addEventListener('click', mostraPergunta);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.style.display = 'none';
        caixaAlternativas.style.display = 'none';
        caixaHistoria.style.display = 'none';
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
    }

    function mostraPergunta() {
        caixaHistoria.style.display = 'none';
        caixaPerguntas.style.display = 'block';
        caixaAlternativas.style.display = 'block';
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
            const botaoAlternativa = document.createElement("button");
            botaoAlternativa.textContent = alternativa.texto;
            botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativa);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        historiaFinal += opcaoSelecionada.historia + " ";
        caixaPerguntas.style.display = 'none';
        caixaAlternativas.style.display = 'none';
        caixaHistoria.style.display = 'block';
        textoHistoria.textContent = opcaoSelecionada.historia;
        botaoContinuar.style.display = 'block';
        if (opcaoSelecionada.proxima === 'end-win') {
            mostraResultado("Você conseguiu voltar para casa!");
        } else if (opcaoSelecionada.proxima === 'end-lose') {
            mostraResultado("Você se perdeu na floresta.");
        } else {
            atual = opcaoSelecionada.proxima;
        }
    }

    function mostraResultado(mensagem) {
        caixaPerguntas.style.display = 'none';
        caixaAlternativas.style.display = 'none';
        caixaHistoria.style.display = 'none';
        textoResultado.textContent = historiaFinal + " " + mensagem;
        caixaResultado.classList.add("mostrar");
        botaoJogarNovamente.addEventListener("click", jogaNovamente);
    }

    function jogaNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
       
