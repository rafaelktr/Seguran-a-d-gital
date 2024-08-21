// script.js

import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Adicionando o evento para iniciar o jogo
botaoIniciar.addEventListener('click', iniciaJogo);

// Adicionando o evento para jogar novamente
botaoJogarNovamente.addEventListener('click', jogaNovamente);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none'; // Oculta a tela inicial
    caixaPerguntas.classList.add("mostrar"); // Mostra as perguntas
    caixaAlternativas.classList.add("mostrar"); // Mostra as alternativas
    caixaResultado.classList.remove("mostrar"); // Garante que o resultado não esteja visível
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");

    // Oculta as perguntas e alternativas
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar"); // Oculta a caixa de resultado
    telaInicial.style.display = 'block'; // Mostra a tela inicial
    caixaPerguntas.classList.remove("mostrar"); // Garante que a caixa de perguntas esteja oculta
    caixaAlternativas.classList.remove("mostrar"); // Garante que a caixa de alternativas esteja oculta
}

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();
