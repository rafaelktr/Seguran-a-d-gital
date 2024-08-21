// script.js

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
        // Adicione as suas outras perguntas aqui
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
    const botaoContinuar = document.createElement("button");

    let atual = 0;
    let historiaFinal = "";

    botaoIniciar.addEventListener('click', iniciaJogo);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.remove("mostrar");
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
            const botaoAlternativa = document.createElement("button");
            botaoAlternativa.textContent = alternativa.texto;
            botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativa);
        }
        caixaPerguntas.classList.add("mostrar");
        caixaAlternativas.classList.add("mostrar");
    }

    function respostaSelecionada(opcaoSelecionada) {
        historiaFinal += opcaoSelecionada.afirmacao + " ";
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");

        // Cria e configura o botão "Continuar"
        botaoContinuar.textContent = "Continuar";
        botaoContinuar.classList.add("continuar-btn");
        botaoContinuar.addEventListener("click", () => {
            if (opcaoSelecionada.proxima === 'end-win') {
                mostraResultado("Você conseguiu voltar para casa!");
            } else if (opcaoSelecionada.proxima === 'end-lose') {
                mostraResultado("Você se perdeu na floresta.");
            } else {
                atual = opcaoSelecionada.proxima;
                mostraPergunta();
            }
        });

        caixaResultado.innerHTML = `<p>${opcaoSelecionada.afirmacao}</p>`;
        caixaResultado.appendChild(botaoContinuar);
        caixaResultado.classList.add("mostrar");
    }

    function mostraResultado(mensagem) {
        caixaPerguntas.textContent = mensagem;
        textoResultado.textContent = historiaFinal;
        caixaResultado.classList.add("mostrar");
        botaoJogarNovamente.addEventListener("click", jogaNovamente);
    }

    function jogaNovamente() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostrar");
        telaInicial.style.display = 'block';
        botaoJogarNovamente.removeEventListener("click", jogaNovamente);
    }
});

