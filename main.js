// script.js

document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            enunciado: "Você está na floresta. O que faz?",
            alternativas: [
                {
                    texto: "Procura um abrigo.",
                    historia: "Você encontra um abrigo seguro e continua sua jornada. No entanto, você sente que está sendo observado.",
                    proxima: 1,
                },
                {
                    texto: "Continua andando.",
                    historia: "Você se sente cada vez mais perdido na floresta. O medo aumenta e você ouve ruídos estranhos.",
                    proxima: 2,
                },
            ]
        },
        {
            enunciado: "Você encontra uma caverna. O que faz?",
            alternativas: [
                {
                    texto: "Entra na caverna.",
                    historia: "Dentro da caverna, você percebe algo no canto escuro. O que faz?",
                    proxima: 3,
                },
                {
                    texto: "Ignora a caverna.",
                    historia: "Você continua se perdendo na floresta e encontra um campo de flores. O que faz?",
                    proxima: 4,
                },
            ]
        },
        {
            enunciado: "Dentro da caverna, você percebe algo no canto escuro. O que faz?",
            alternativas: [
                {
                    texto: "Explora o canto escuro.",
                    historia: "Você se aproxima do canto escuro e encontra uma figura sombria. Você decide se esconder.",
                    proxima: 5,
                },
                {
                    texto: "Sai da caverna.",
                    historia: "Você rapidamente sai da caverna e continua explorando. Encontra uma clareira. O que faz?",
                    proxima: 6,
                },
            ]
        },
        {
            enunciado: "Você se esconde, mas a figura sombria se aproxima. O que faz?",
            alternativas: [
                {
                    texto: "Fica imóvel e espera.",
                    historia: "A figura passa por você sem notar sua presença. Você decide seguir em frente.",
                    proxima: 7,
                },
                {
                    texto: "Tenta fugir.",
                    historia: "Você tenta fugir, mas a figura sombria te alcança. Você se perde na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você encontra uma clareira. O que faz?",
            alternativas: [
                {
                    texto: "Explora a clareira.",
                    historia: "Você explora a clareira e encontra uma pista que pode te ajudar. O que faz?",
                    proxima: 8,
                },
                {
                    texto: "Volta para a floresta.",
                    historia: "Você volta para a floresta e encontra um rio. O que faz?",
                    proxima: 9,
                },
            ]
        },
        {
            enunciado: "Você encontra um rio. O que faz?",
            alternativas: [
                {
                    texto: "Atravesse o rio.",
                    historia: "Você atravessa o rio e encontra um caminho que leva a uma ponte. O que faz?",
                    proxima: 10,
                },
                {
                    texto: "Seguir ao longo do rio.",
                    historia: "Você segue ao longo do rio e encontra um acampamento abandonado. O que faz?",
                    proxima: 11,
                },
            ]
        },
        {
            enunciado: "Você encontra um acampamento abandonado. O que faz?",
            alternativas: [
                {
                    texto: "Explora o acampamento.",
                    historia: "Você explora o acampamento e encontra uma pista sobre uma saída. O que faz?",
                    proxima: 12,
                },
                {
                    texto: "Ignora e continua andando.",
                    historia: "Você ignora o acampamento e continua andando pela floresta. O que faz?",
                    proxima: 13,
                },
            ]
        },
        {
            enunciado: "Você encontra uma pista sobre uma saída. O que faz?",
            alternativas: [
                {
                    texto: "Segue a pista.",
                    historia: "A pista leva a uma clareira onde você encontra um mapa da floresta. O que faz?",
                    proxima: 14,
                },
                {
                    texto: "Ignora a pista.",
                    historia: "Você ignora a pista e continua sua busca. Acaba se perdendo na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você encontra um mapa da floresta. O que faz?",
            alternativas: [
                {
                    texto: "Segue o mapa.",
                    historia: "O mapa te guia até um caminho seguro que leva a uma ponte. O que faz?",
                    proxima: 15,
                },
                {
                    texto: "Ignora o mapa.",
                    historia: "Você ignora o mapa e continua a exploração aleatória. Encontra um monstro e se perde.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você encontra um caminho seguro que leva a uma ponte. O que faz?",
            alternativas: [
                {
                    texto: "Atravesse a ponte.",
                    historia: "Você atravessa a ponte e finalmente volta para casa!",
                    proxima: 'end-win',
                },
                {
                    texto: "Volta para o caminho seguro.",
                    historia: "Você volta para o caminho seguro e se perde novamente na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        // Perguntas adicionais para completar as 22 perguntas:
        {
            enunciado: "Você está perdido em uma clareira. O que faz?",
            alternativas: [
                {
                    texto: "Procura por sinais de saída.",
                    historia: "Você encontra marcas na árvore que indicam uma direção. O que faz?",
                    proxima: 16,
                },
                {
                    texto: "Senta e espera.",
                    historia: "Você se senta para descansar, mas o medo aumenta. O que faz?",
                    proxima: 17,
                },
            ]
        },
        {
            enunciado: "Você encontra marcas na árvore. O que faz?",
            alternativas: [
                {
                    texto: "Segue as marcas.",
                    historia: "As marcas levam a um caminho que parece promissor. O que faz?",
                    proxima: 18,
                },
                {
                    texto: "Ignora as marcas.",
                    historia: "Você decide ignorar as marcas e continua por conta própria. Encontra um buraco no chão.",
                    proxima: 19,
                },
            ]
        },
        {
            enunciado: "Você encontra um buraco no chão. O que faz?",
            alternativas: [
                {
                    texto: "Explora o buraco.",
                    historia: "Você explora o buraco e encontra uma caverna secreta. O que faz?",
                    proxima: 20,
                },
                {
                    texto: "Ignora o buraco.",
                    historia: "Você ignora o buraco e continua andando. Se perde na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você encontra uma caverna secreta. O que faz?",
            alternativas: [
                {
                    texto: "Entra na caverna.",
                    historia: "Dentro da caverna, você encontra uma saída para a floresta. O que faz?",
                    proxima: 21,
                },
                {
                    texto: "Volta para o buraco.",
                    historia: "Você volta para o buraco e encontra um monstro. Se perde na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Dentro da caverna, você encontra uma saída para a floresta. O que faz?",
            alternativas: [
                {
                    texto: "Seguir pela saída.",
                    historia: "Você segue pela saída e encontra um caminho que leva a uma ponte. O que faz?",
                    proxima: 22,
                },
                {
                    texto: "Explorar mais a caverna.",
                    historia: "Você explora mais a caverna e encontra um monstro. Se perde na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você encontra um caminho que leva a uma ponte. O que faz?",
            alternativas: [
                {
                    texto: "Atravesse a ponte.",
                    historia: "Você atravessa a ponte e finalmente volta para casa!",
                    proxima: 'end-win',
                },
                {
                    texto: "Volta para o caminho.",
                    historia: "Você volta para o caminho e se perde na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        // Mais perguntas podem ser adicionadas aqui conforme necessário
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

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaHistoria.style.display = 'none';
        botaoContinuar.style.display = 'none';
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
        caixaPerguntas.classList.add("mostrar");
        caixaAlternativas.classList.add("mostrar");
        caixaHistoria.style.display = 'none';
        botaoContinuar.style.display = 'none';
    }

    function mostraAlternativas(pergunta) {
        for (const alternativa of pergunta.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        historiaFinal += opcaoSelecionada.historia + " ";
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaHistoria.style.display = 'block';
        textoHistoria.textContent = opcaoSelecionada.historia;
        botaoContinuar.style.display = 'block';
        botaoContinuar.removeEventListener("click", continuaPergunta); // Remove qualquer listener anterior para evitar múltiplos eventos
        botaoContinuar.addEventListener("click", () => {
            if (opcaoSelecionada.proxima === 'end-win' || opcaoSelecionada.proxima === 'end-lose') {
                mostraResultado();
            } else {
                atual = opcaoSelecionada.proxima;
                caixaHistoria.style.display = 'none';
                botaoContinuar.style.display = 'none';
                mostraPergunta();
            }
        });
    }

    function mostraResultado() {
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaHistoria.style.display = 'none';
        caixaResultado.classList.add("mostrar");
        textoResultado.textContent = historiaFinal.includes('ponte') ? "Você atravessou a ponte e voltou para casa!" : "Você se perdeu na floresta.";
    }

    botaoJogarNovamente.addEventListener('click', () => {
        caixaResultado.classList.remove("mostrar");
        telaInicial.style.display = 'block';
    });
});
