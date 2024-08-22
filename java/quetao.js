export const perguntas = [
    {
        enunciado: "Você está na floresta. O que faz?",
        alternativas: [
            {
                texto: "Procura um abrigo.",
                afirmacao: ["Você encontra um abrigo seguro e continua sua jornada. No entanto, você sente que está sendo observado."],
                proxima: 1,
            },
            {
                texto: "Continua andando.",
                afirmacao: ["Você se sente cada vez mais perdido na floresta. O medo aumenta e você ouve ruídos estranhos."],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Você encontra uma caverna. O que faz?",
        alternativas: [
            {
                texto: "Entra na caverna.",
                afirmacao: ["Dentro da caverna, você percebe algo no canto escuro. O que faz?"],
                proxima: 3,
            },
            {
                texto: "Ignora a caverna.",
                afirmacao: ["Você continua se perdendo na floresta e encontra um campo de flores. O que faz?"],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Dentro da caverna, você percebe algo no canto escuro. O que faz?",
        alternativas: [
            {
                texto: "Explora o canto escuro.",
                afirmacao: ["Você se aproxima do canto escuro e encontra uma figura sombria. Você decide se esconder."],
                proxima: 5,
            },
            {
                texto: "Sai da caverna.",
                afirmacao: ["Você rapidamente sai da caverna e continua explorando. Encontra uma clareira. O que faz?"],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Você volta para a floresta e encontra um rio. O que faz?",
        alternativas: [
            {
                texto: "Segue ao longo do rio.",
                afirmacao: ["Você segue ao longo do rio e encontra uma ponte. O que faz?"],
                proxima: 7,
            },
            {
                texto: "Tenta atravessar o rio.",
                afirmacao: ["Você tenta atravessar o rio, mas a correnteza é forte e você se afasta. Você volta para a margem ou procura outro caminho?"],
                proxima: 8,
            },
        ]
    },
    {
        enunciado: "Você decide voltar para a floresta e encontra uma clareira com uma cabana abandonada. O que faz?",
        alternativas: [
            {
                texto: "Explora a cabana.",
                afirmacao: ["Dentro da cabana, você encontra uma passagem secreta que leva a uma nova área da floresta. O que faz?"],
                proxima: 9,
            },
            {
                texto: "Ignora a cabana.",
                afirmacao: ["Você continua explorando a clareira e encontra um grupo de árvores. O que faz?"],
                proxima: 10,
            },
        ]
    },
    {
        enunciado: "Você segue ao longo do rio e encontra uma ponte. O que faz?",
        alternativas: [
            {
                texto: "Atravesse a ponte.",
                afirmacao: ["Você atravessa a ponte e finalmente volta para casa!"],
                proxima: null, // Sem próximo, pois é um final
            },
            {
                texto: "Volta para a floresta.",
                afirmacao: ["Você se perde novamente na floresta."],
                proxima: null, // Sem próximo, pois é um final
            },
        ]
    },
    {
        enunciado: "Você tenta atravessar o rio, mas é arrastado pela correnteza e se afasta. O que faz?",
        alternativas: [
            {
                texto: "Volta para a margem e procura um novo caminho.",
                afirmacao: ["Você volta para a margem e encontra uma trilha escondida entre as árvores. O que faz?"],
                proxima: 11,
            },
            {
                texto: "Segue o curso do rio.",
                afirmacao: ["Você decide seguir o curso do rio e encontra uma cachoeira. O que faz?"],
                proxima: 12,
            },
        ]
    },
    // ...continua com o mesmo padrão
];
