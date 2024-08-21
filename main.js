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
            enunciado: "Você volta para a floresta e encontra um rio. O que faz?",
            alternativas: [
                {
                    texto: "Segue ao longo do rio.",
                    historia: "Você segue ao longo do rio e encontra uma ponte. O que faz?",
                    proxima: 7,
                },
                {
                    texto: "Tenta atravessar o rio.",
                    historia: "Você tenta atravessar o rio, mas a correnteza é forte e você se afasta. Você volta para a margem ou procura outro caminho?",
                    proxima: 8,
                },
            ]
        },
        {
            enunciado: "Você decide voltar para a floresta e encontra uma clareira com uma cabana abandonada. O que faz?",
            alternativas: [
                {
                    texto: "Explora a cabana.",
                    historia: "Dentro da cabana, você encontra uma passagem secreta que leva a uma nova área da floresta. O que faz?",
                    proxima: 9,
                },
                {
                    texto: "Ignora a cabana.",
                    historia: "Você continua explorando a clareira e encontra um grupo de árvores. O que faz?",
                    proxima: 10,
                },
            ]
        },
        {
            enunciado: "Você segue ao longo do rio e encontra uma ponte. O que faz?",
            alternativas: [
                {
                    texto: "Atravesse a ponte.",
                    historia: "Você atravessa a ponte e finalmente volta para casa!",
                    proxima: 'end-win',
                },
                {
                    texto: "Volta para a floresta.",
                    historia: "Você se perde novamente na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você tenta atravessar o rio, mas é arrastado pela correnteza e se afasta. O que faz?",
            alternativas: [
                {
                    texto: "Volta para a margem e procura um novo caminho.",
                    historia: "Você volta para a margem e encontra uma trilha escondida entre as árvores. O que faz?",
                    proxima: 11,
                },
                {
                    texto: "Segue o curso do rio.",
                    historia: "Você decide seguir o curso do rio e encontra uma cachoeira. O que faz?",
                    proxima: 12,
                },
            ]
        },
        {
            enunciado: "Você volta para a margem e encontra uma trilha escondida entre as árvores. O que faz?",
            alternativas: [
                {
                    texto: "Segue pela trilha.",
                    historia: "Você segue pela trilha e encontra um velho abrigo. O que faz?",
                    proxima: 13,
                },
                {
                    texto: "Ignora a trilha.",
                    historia: "Você decide continuar explorando e encontra um campo de flores. O que faz?",
                    proxima: 14,
                },
            ]
        },
        {
            enunciado: "Você decide seguir o curso do rio e encontra uma cachoeira. O que faz?",
            alternativas: [
                {
                    texto: "Explora a área ao redor da cachoeira.",
                    historia: "Você explora a área ao redor e encontra uma passagem subterrânea. O que faz?",
                    proxima: 15,
                },
                {
                    texto: "Volta para a margem do rio.",
                    historia: "Você volta para a margem do rio e encontra uma trilha para a floresta. O que faz?",
                    proxima: 16,
                },
            ]
        },
        {
            enunciado: "Você explora a área ao redor da cachoeira e encontra uma passagem subterrânea. O que faz?",
            alternativas: [
                {
                    texto: "Entra na passagem subterrânea.",
                    historia: "Você entra na passagem e encontra uma saída para a floresta. O que faz?",
                    proxima: 17,
                },
                {
                    texto: "Ignora a passagem e volta para a margem.",
                    historia: "Você volta para a margem e encontra uma trilha para a floresta. O que faz?",
                    proxima: 18,
                },
            ]
        },
        {
            enunciado: "Você encontra um velho abrigo. O que faz?",
            alternativas: [
                {
                    texto: "Explora o abrigo.",
                    historia: "Dentro do abrigo, você encontra um mapa da floresta. O que faz?",
                    proxima: 19,
                },
                {
                    texto: "Sai do abrigo.",
                    historia: "Você sai do abrigo e encontra uma ponte. O que faz?",
                    proxima: 20,
                },
            ]
        },
        {
            enunciado: "Você encontra um campo de flores. O que faz?",
            alternativas: [
                {
                    texto: "Explora o campo.",
                    historia: "Você explora o campo e encontra uma pequena cabana. O que faz?",
                    proxima: 21,
                },
                {
                    texto: "Volta para a trilha.",
                    historia: "Você volta para a trilha e encontra uma clareira. O que faz?",
                    proxima: 22,
                },
            ]
        },
        {
            enunciado: "Você entra na passagem subterrânea e encontra uma saída para a floresta. O que faz?",
            alternativas: [
                {
                    texto: "Segue pela saída.",
                    historia: "Você segue pela saída e encontra uma ponte. O que faz?",
                    proxima: 23,
                },
                {
                    texto: "Explora mais a passagem.",
                    historia: "Você explora mais a passagem e encontra uma caverna com uma figura ameaçadora. O que faz?",
                    proxima: 24,
                },
            ]
        },
        {
            enunciado: "Você encontra uma trilha para a floresta. O que faz?",
            alternativas: [
                {
                    texto: "Segue pela trilha.",
                    historia: "Você segue pela trilha e encontra uma ponte. O que faz?",
                    proxima: 25,
                },
                {
                    texto: "Volta para o rio.",
                    historia: "Você volta para o rio e tenta atravessá-lo novamente. O que faz?",
                    proxima: 26,
                },
            ]
        },
        {
            enunciado: "Você explora o abrigo e encontra um mapa da floresta. O que faz?",
            alternativas: [
                {
                    texto: "Segue as instruções do mapa.",
                    historia: "Você segue as instruções e encontra uma ponte. O que faz?",
                    proxima: 27,
                },
                {
                    texto: "Ignora o mapa e volta para o campo de flores.",
                    historia: "Você volta para o campo de flores e encontra uma cabana. O que faz?",
                    proxima: 28,
                },
            ]
        },
        {
            enunciado: "Você encontra uma ponte. O que faz?",
            alternativas: [
                {
                    texto: "Atravesse a ponte.",
                    historia: "Você atravessa a ponte e finalmente volta para casa!",
                    proxima: 'end-win',
                },
                {
                    texto: "Volta para a floresta.",
                    historia: "Você se perde novamente na floresta.",
                    proxima: 'end-lose',
                },
            ]
        },
        {
            enunciado: "Você encontra uma pequena cabana. O que faz?",
            alternativas: [
                {
                    texto: "Explora a cabana.",
                    historia: "Dentro da cabana, você encontra um mapa que leva à ponte. O que faz?",
                    proxima: 29,
                },
                {
                    texto: "Ignora a cabana.",
                    historia: "Você continua explorando e encontra uma clareira.",
                    proxima: 30,
                },
            ]
        },
        {
            enunciado: "Dentro da cabana, você encontra um mapa que leva à ponte. O que faz?",
            alternativas: [
                {
                    texto: "Segue o mapa.",
                    historia: "Você segue o mapa e encontra uma ponte. O que faz?",
                    proxima: 31,
                },
                {
                    texto: "Ignora o mapa e volta para a floresta.",
                    historia: "Você volta para a floresta e encontra um novo desafio.",
                    proxima: 32,
                },
            ]
        },
        {
            enunciado: "Você encontra uma clareira. O que faz?",
            alternativas: [
                {
                    texto: "Explora a clareira.",
                    historia: "Você explora a clareira e encontra um novo caminho. O que faz?",
                    proxima: 33,
                },
                {
                    texto: "Volta para a cabana.",
                    historia: "Você volta para a cabana e encontra novos itens. O que faz?",
                    proxima: 34,
                },
            ]
        }
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
        botaoContinuar.style.display = 'none'; // Esconde o botão "continuar" ao mostrar uma nova pergunta
    }

    function mostraAlternativas(pergunta) {
        for (const alternativa of pergunta.alternativas) {
            const botaoAlternativa = document.createElement("button");
            botaoAlternativa.textContent = alternativa
        }
    }