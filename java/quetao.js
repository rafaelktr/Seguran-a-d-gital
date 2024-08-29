export const perguntas = [
    {
        enunciado: "Você está na floresta. O que faz?",
        alternativas: [
            {
                texto: "Procura um abrigo.",
                afirmacao: [
                    "Você encontra um abrigo seguro e continua sua jornada. No entanto, você sente que está sendo observado."
                ],
                proxima: 1, // Vai para o próximo enunciado sobre a caverna.
            },
            {
                texto: "Continua andando.",
                afirmacao: [
                    "Você se sente cada vez mais perdido na floresta. O medo aumenta e você ouve ruídos estranhos."
                ],
                proxima: 1, // Vai para o próximo enunciado sobre a caverna.
            },
        ]
    },
    {
        enunciado: "Você encontra uma caverna. O que faz?",
        alternativas: [
            {
                texto: "Ignora a caverna.",
                afirmacao: [
                    "Você continua se perdendo na floresta e encontra um campo de flores. O que faz?"
                ],
                proxima: 3, // Vai para o enunciado do campo de flores.
            },
            {
                texto: "Entra na caverna.",
                afirmacao: [
                    "Você se aproxima do canto escuro e encontra uma figura sombria. Você decide se esconder."
                ],
                proxima: 2, // Vai para o enunciado dentro da caverna.
            },
        ]
    },
    {
        enunciado: "Dentro da caverna, você percebe algo no canto escuro. O que faz?",
        alternativas: [
            {
                texto: "Explora o canto escuro.",
                afirmacao: [
                    "Você se aproxima do canto escuro e encontra uma figura sombria. Você decide se esconder."
                ],
                proxima: 4, // Vai para o enunciado sobre a figura sombria.
            },
            {
                texto: "Sai da caverna.",
                afirmacao: [
                    "Você rapidamente sai da caverna e continua explorando. Encontra uma clareira. O que faz?"
                ],
                proxima: 5, // Vai para o enunciado da clareira.
            },
        ]
    },
    {
        enunciado: "Você volta para a floresta e encontra um rio. O que faz?",
        alternativas: [
            {
                texto: "Segue ao longo do rio.",
                afirmacao: [
                    "Você segue ao longo do rio e encontra uma ponte. O que faz?"
                ],
                proxima: 6, // Vai para o enunciado da ponte.
            },
            {
                texto: "Tenta atravessar o rio.",
                afirmacao: [
                    "Você tenta atravessar o rio, mas a correnteza é forte e você se afasta. Você volta para a margem ou procura outro caminho?"
                ],
                proxima: 7, // Vai para o enunciado da margem do rio.
            },
        ]
    },
    {
        enunciado: "Você decide voltar para a floresta e encontra uma clareira com uma cabana abandonada. O que faz?",
        alternativas: [
            {
                texto: "Explora a cabana.",
                afirmacao: [
                    "Dentro da cabana, você encontra uma passagem secreta que leva a uma nova área da floresta. O que faz?"
                ],
                proxima: 8, // Vai para o enunciado da cabana com a passagem secreta.
            },
            {
                texto: "Ignora a cabana.",
                afirmacao: [
                    "Você continua explorando a clareira e encontra um grupo de árvores. O que faz?"
                ],
                proxima: 9, // Vai para o enunciado das árvores.
            },
        ]
    },
    {
        enunciado: "Você segue ao longo do rio e encontra uma ponte. O que faz?",
        alternativas: [
            {
                texto: "Atravesse a ponte.",
                afirmacao: [
                    "Você atravessa a ponte e finalmente volta para casa!"
                ],
                proxima: 10, // Vai para o desfecho de voltar para casa.
            },
            {
                texto: "Volta para a floresta.",
                afirmacao: [
                    "Você se perde novamente na floresta."
                ],
                proxima: 1, // Volta para o início na floresta.
            },
        ]
    },
    {
        enunciado: "Você tenta atravessar o rio, mas é arrastado pela correnteza e se afasta. O que faz?",
        alternativas: [
            {
                texto: "Volta para a margem e procura um novo caminho.",
                afirmacao: [
                    "Você volta para a margem e encontra uma trilha escondida entre as árvores. O que faz?"
                ],
                proxima: 11, // Vai para o enunciado da trilha escondida.
            },
            {
                texto: "Segue o curso do rio.",
                afirmacao: [
                    "Você decide seguir o curso do rio e encontra uma cachoeira. O que faz?"
                ],
                proxima: 12, // Vai para o enunciado da cachoeira.
            },
        ]
    },
    {
        enunciado: "Você volta para a margem e encontra uma trilha escondida entre as árvores. O que faz?",
        alternativas: [
            {
                texto: "Segue pela trilha.",
                afirmacao: [
                    "Você segue pela trilha e encontra um velho abrigo. O que faz?"
                ],
                proxima: 13, // Vai para o enunciado do abrigo.
            },
            {
                texto: "Ignora a trilha.",
                afirmacao: [
                    "Você decide continuar explorando e encontra um campo de flores. O que faz?"
                ],
                proxima: 3, // Volta para o enunciado do campo de flores.
            },
        ]
    },
    {
        enunciado: "Você decide seguir o curso do rio e encontra uma cachoeira. O que faz?",
        alternativas: [
            {
                texto: "Volta para a margem do rio.",
                afirmacao: [
                    "Você volta para a margem do rio e encontra uma trilha para a floresta. O que faz?"
                ],
                proxima: 11, // Vai para o enunciado da trilha escondida.
            },
            {
                texto: "Você explora a área ao redor da cachoeira e encontra uma passagem subterrânea. O que faz?",
                afirmacao: [
                    "STATUS: Vivo"
                ],
                proxima: 14, // Vai para um desfecho final.
            },
        ]
    },
];
