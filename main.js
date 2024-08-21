// script.js

const questions = [
    {
        question: "Você está perdido na floresta. O que você faz?",
        choices: [
            { text: "Procura um abrigo.", next: 1 },
            { text: "Continua andando.", next: 2 }
        ]
    },
    {
        question: "Você encontra uma caverna. O que fazer?",
        choices: [
            { text: "Entra na caverna.", next: 3 },
            { text: "Ignora a caverna e continua.", next: 4 }
        ]
    },
    // Adicione mais perguntas aqui
    // ...
    {
        question: "Você chega a uma ponte. O que faz?",
        choices: [
            { text: "Atravesse a ponte.", next: 'end-win' },
            { text: "Volta para a floresta.", next: 'end-lose' }
        ]
    }
];

let currentQuestionIndex = 0;

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.innerText = choice.text;
        button.onclick = () => handleChoice(choice.next);
        choicesContainer.appendChild(button);
    });
}

function handleChoice(next) {
    if (next === 'end-win') {
        document.getElementById('question').innerText = "Você conseguiu atravessar a ponte e está a salvo!";
        document.getElementById('choices').innerHTML = '';
    } else if (next === 'end-lose') {
        document.getElementById('question').innerText = "Você se perdeu na floresta e nunca mais foi encontrado.";
        document.getElementById('choices').innerHTML = '';
    } else {
        currentQuestionIndex = next;
        renderQuestion();
    }
}

document.addEventListener('DOMContentLoaded', renderQuestion);
