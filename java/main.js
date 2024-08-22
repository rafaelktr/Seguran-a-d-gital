import { aleatorio, nome } from './random.js';
import { perguntas } from './quetao.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento carregado');


    const startBtn = document.getElementById('start-btn');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const alternativesContainer = document.getElementById('alternatives-container');
    const continueBtn = document.getElementById('continue-btn');

    let currentQuestionIndex = 0;

    startBtn.addEventListener('click', () => {
        console.log('Iniciando o jogo');
        startBtn.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion(currentQuestionIndex);
    });

    continueBtn.addEventListener('click', () => {
        console.log('Botão Continuar clicado');
        const proximaPergunta = perguntas[currentQuestionIndex].alternativas.find(alt => alt.selecionada)?.proxima;
        if (proximaPergunta !== undefined) {
            currentQuestionIndex = proximaPergunta;
            showQuestion(currentQuestionIndex);
        }
    });

    function showQuestion(index) {
        if (index === 'end-win') {
            questionText.textContent = "Parabéns! Você encontrou a saída e voltou para casa!";
            alternativesContainer.innerHTML = '';
            continueBtn.classList.add('hidden');
            return;
        } else if (index === 'end-lose') {
            questionText.textContent = "Você se perdeu na floresta.";
            alternativesContainer.innerHTML = '';
            continueBtn.classList.add('hidden');
            return;
        }

        const pergunta = perguntas[index];
        questionText.textContent = pergunta.enunciado;
        alternativesContainer.innerHTML = '';

        pergunta.alternativas.forEach((alternativa) => {
            const btn = document.createElement('button');
            btn.textContent = alternativa.texto;
            btn.addEventListener('click', () => {
                pergunta.alternativas.forEach((alt) => {
                    alt.selecionada = false;
                });
                alternativa.selecionada = true;
                questionText.textContent = alternativa.historia;
                continueBtn.classList.remove('hidden');
            });
            alternativesContainer.appendChild(btn);
        });

        continueBtn.classList.add('hidden');
    }
});
