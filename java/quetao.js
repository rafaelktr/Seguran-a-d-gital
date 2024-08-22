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
                proxima: 29,
            },
            {
                texto: "Volta para a floresta.",
                afirmacao: ["Você se perde novamente na floresta."],
                proxima: null, 
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
    {
        enunciado: "Você volta para a margem e encontra uma trilha escondida entre as árvores. O que faz?",
        alternativas: [
            {
                texto: "Segue pela trilha.",
                afirmacao: ["Você segue pela trilha e encontra um velho abrigo. O que faz?"],
                proxima: 13,
            },
            {
                texto: "Ignora a trilha.",
                afirmacao: ["Você decide continuar explorando e encontra um campo de flores. O que faz?"],
                proxima: 14,
            },
        ]
    },
    {
        enunciado: "Você decide seguir o curso do rio e encontra uma cachoeira. O que faz?",
        alternativas: [
            {
                texto: "Explora a área ao redor da cachoeira.",
                afirmacao: ["Você explora a área ao redor e encontra uma passagem subterrânea. O que faz?"],
                proxima: 15,
            },
            {
                texto: "Volta para a margem do rio.",
                afirmacao: ["Você volta para a margem do rio e encontra uma trilha para a floresta. O que faz?"],
                proxima: 16,
            },
        ]
    },
    {
        enunciado: "Você explora a área ao redor da cachoeira e encontra uma passagem subterrânea. O que faz?",
        alternativas: [
            {
                texto: "Entra na passagem subterrânea.",
                afirmacao: ["Você entra na passagem e encontra uma saída para a floresta. O que faz?"],
                proxima: 17,
            },
            {
                texto: "Ignora a passagem e volta para a margem.",
                afirmacao: ["Você volta para a margem e encontra uma trilha para a floresta. O que faz?"],
                proxima: 18,
            },
        ]
    },
    {
        enunciado: "Você encontra um velho abrigo. O que faz?",
        alternativas: [
            {
                texto: "Explora o abrigo.",
                afirmacao: ["Dentro do abrigo, você encontra um mapa da floresta. O que faz?"],
                proxima: 19,
            },
            {
                texto: "Sai do abrigo.",
                afirmacao: ["Você sai do abrigo e encontra uma ponte. O que faz?"],
                proxima: 20,
            },
        ]
    },
    {
        enunciado: "Você encontra um campo de flores. O que faz?",
        alternativas: [
            {
                texto: "Explora o campo.",
                afirmacao: ["Você explora o campo e encontra uma pequena cabana. O que faz?"],
                proxima: 21,
            },
            {
                texto: "Volta para a trilha.",
                afirmacao: ["Você volta para a trilha e encontra uma clareira. O que faz?"],
                proxima: 22,
            },
        ]
    },
    {
        enunciado: "Você entra na passagem subterrânea e encontra uma saída para a floresta. O que faz?",
        alternativas: [
            {
                texto: "Segue pela saída.",
                afirmacao: ["Você segue pela saída e encontra uma ponte. O que faz?"],
                proxima: 23,
            },
            {
                texto: "Explora mais a passagem.",
                afirmacao: ["Você explora mais a passagem e encontra uma caverna com uma figura ameaçadora. O que faz?"],
                proxima: 24,
            },
        ]
    },
    {
        enunciado: "Você encontra uma trilha para a floresta. O que faz?",
        alternativas: [
            {
                texto: "Segue pela trilha.",
                afirmacao: ["Você segue pela trilha e encontra uma ponte. O que faz?"],
                proxima: 25,
            },
            {
                texto: "Volta para o rio.",
                afirmacao: ["Você volta para o rio e tenta atravessá-lo novamente. O que faz?"],
                proxima: 26,
            },
        ]
    },
    {
        enunciado: "Você explora o abrigo e encontra um mapa da floresta. O que faz?",
        alternativas: [
            {
                texto: "Segue as instruções do mapa.",
                afirmacao: ["Você segue as instruções e encontra uma ponte. O que faz?"],
                proxima: 27,
            },
            {
                texto: "Ignora o mapa e volta para o campo de flores.",
                afirmacao: ["Você volta para o campo de flores e encontra uma cabana. O que faz?"],
                proxima: 28,
            },
        ]
    },
    {
        enunciado: "Você encontra uma ponte. O que faz?",
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
        enunciado: "Você encontra uma caverna com uma figura ameaçadora. O que faz?",
        alternativas: [
            {
                texto: "Enfrenta a figura.",
                afirmacao: ["Você enfrenta a figura e descobre que era apenas uma ilusão. Você sai da caverna e encontra uma ponte. O que faz?"],
                proxima: 29,
            },
            {
                texto: "Foge da caverna.",
                afirmacao: ["Você foge da caverna e volta para a margem do rio. O que faz?"],
                proxima: 30,
            },
        ]
    },
    {
        enunciado: "Você tenta atravessar o rio novamente. O que faz?",
        alternativas: [
            {
                texto: "Encontra uma passagem segura.",
                afirmacao: ["Você encontra uma passagem segura e atravessa o rio. O que faz?"],
                proxima: 31,
            },
            {
                texto: "Desiste da travessia.",
                afirmacao: ["Você desiste da travessia e volta para a floresta. O que faz?"],
                proxima: 32,
            },
        ]
    },
    {
        enunciado: "Você volta para o campo de flores e encontra uma cabana. O que faz?",
        alternativas: [
            {
                texto: "Explora a cabana.",
                afirmacao: ["Dentro da cabana, você encontra um antigo diário. O que faz?"],
                proxima: 33,
            },
            {
                texto: "Ignora a cabana.",
                afirmacao: ["Você ignora a cabana e encontra uma clareira. O que faz?"],
                proxima: 34,
            },
        ]
    },
    {
        enunciado: "Você atravessa a ponte e volta para casa. Parabéns, você completou o jogo!",
        alternativas: [],
        proxima: null,
    },
    {
        enunciado: "Você se perde novamente na floresta. O jogo terminou.",
        alternativas: [],
        proxima: null,
    },
    {
        enunciado: "Você encontra uma passagem segura e atravessa o rio. Você vê uma ponte à frente. O que faz?",
        alternativas: [
            {
                texto: "Atravesse a ponte.",
                afirmacao: ["Você atravessa a ponte e volta para casa. Parabéns!"],
                proxima: null,
            },
            {
                texto: "Explora a área ao redor.",
                afirmacao: ["Você explora a área ao redor e encontra uma nova caverna. O que faz?"],
                proxima: 35,
            },
        ]
    },
    {
        enunciado: "Você desiste da travessia e volta para a floresta. O que faz?",
        alternativas: [
            {
                texto: "Explora mais a floresta.",
                afirmacao: ["Você explora mais a floresta e encontra uma clareira com uma cabana. O que faz?"],
                proxima: 36,
            },
            {
                texto: "Segue a trilha de volta.",
                afirmacao: ["Você segue a trilha de volta e encontra um abrigo. O que faz?"],
                proxima: 37,
            },
        ]
    },
    {
        enunciado: "Você encontra um antigo diário na cabana. O que faz?",
        alternativas: [
            {
                texto: "Lê o diário.",
                afirmacao: ["Você lê o diário e descobre pistas sobre como sair da floresta. O que faz?"],
                proxima: 38,
            },
            {
                texto: "Ignora o diário e sai da cabana.",
                afirmacao: ["Você sai da cabana e encontra uma ponte. O que faz?"],
                proxima: 39,
            },
        ]
    },
    {
        enunciado: "Você explora a clareira e encontra uma nova cabana. O que faz?",
        alternativas: [
            {
                texto: "Explora a nova cabana.",
                afirmacao: ["Dentro da nova cabana, você encontra um mapa antigo. O que faz?"],
                proxima: 40,
            },
            {
                texto: "Volta para a trilha.",
                afirmacao: ["Você volta para a trilha e encontra uma ponte. O que faz?"],
                proxima: 41,
            },
        ]
    },
    {
        enunciado: "Você encontra um abrigo na trilha. O que faz?",
        alternativas: [
            {
                texto: "Explora o abrigo.",
                afirmacao: ["Você explora o abrigo e encontra uma passagem secreta. O que faz?"],
                proxima: 42,
            },
            {
                texto: "Ignora o abrigo.",
                afirmacao: ["Você ignora o abrigo e segue a trilha até encontrar uma ponte. O que faz?"],
                proxima: 43,
            },
        ]
    },
    {
        enunciado: "Você lê o diário e descobre pistas sobre como sair da floresta. O que faz?",
        alternativas: [
            {
                texto: "Segue as pistas.",
                afirmacao: ["Você segue as pistas e encontra uma ponte. O que faz?"],
                proxima: 44,
            },
            {
                texto: "Ignora as pistas e volta para a clareira.",
                afirmacao: ["Você volta para a clareira e encontra uma cabana. O que faz?"],
                proxima: 45,
            },
        ]
    },
    {
        enunciado: "Você explora a nova cabana e encontra um mapa antigo. O que faz?",
        alternativas: [
            {
                texto: "Segue as instruções do mapa.",
                afirmacao: ["Você segue as instruções do mapa e encontra uma ponte. O que faz?"],
                proxima: 46,
            },
            {
                texto: "Ignora o mapa e volta para a floresta.",
                afirmacao: ["Você volta para a floresta e encontra uma clareira. O que faz?"],
                proxima: 47,
            },
        ]
    },
    {
        enunciado: "Você encontra uma ponte e finalmente volta para casa. Parabéns!",
        alternativas: [],
        proxima: null,
    },
    {
        enunciado: "Você volta para a floresta e se perde novamente. O jogo terminou.",
        alternativas: [],
        proxima: null,
    },
    {
        enunciado: "Você segue as pistas do diário e encontra uma ponte. O que faz?",
        alternativas: [
            {
                texto: "Atravesse a ponte.",
                afirmacao: ["Você atravessa a ponte e volta para casa. Parabéns!"],
                proxima: null,
            },
            {
                texto: "Explora a área ao redor da ponte.",
                afirmacao: ["Você explora a área ao redor da ponte e encontra uma nova caverna. O que faz?"],
                proxima: 48,
            },
        ]
    },
    {
        enunciado: "Você explora a clareira e encontra uma cabana. O que faz?",
        alternativas: [
            {
                texto: "Explora a cabana.",
                afirmacao: ["Dentro da cabana, você encontra um mapa da floresta. O que faz?"],
                proxima: 49,
            },
            {
                texto: "Ignora a cabana e continua explorando.",
                afirmacao: ["Você continua explorando e encontra uma ponte. O que faz?"],
                proxima: 50,
            },
        ]
    },
    {
        enunciado: "Você segue as instruções do mapa e encontra uma ponte. O que faz?",
        alternativas: [
            {
                texto: "Atravesse a ponte.",
                afirmacao: ["Você atravessa a ponte e finalmente volta para casa. Parabéns!"],
                proxima: null,
            },
            {
                texto: "Explora a área ao redor da ponte.",
                afirmacao: ["Você explora a área ao redor da ponte e encontra uma nova caverna. O que faz?"],
                proxima: 51,
            },
        ]
    },
    {
        enunciado: "Você explora a nova caverna e encontra uma saída para a floresta. O que faz?",
        alternativas: [
            {
                texto: "Segue pela saída.",
                afirmacao: ["Você segue pela saída e encontra uma ponte. O que faz?"],
                proxima: 52,
            },
            {
                texto: "Explora mais a caverna.",
                afirmacao: ["Você explora mais a caverna e encontra um velho abrigo. O que faz?"],
                proxima: 53,
            },
        ]
    },
    {
        enunciado: "Você encontra uma ponte e volta para casa. Parabéns!",
        alternativas: [],
        proxima: null,
    },
    {
        enunciado: "Você volta para a floresta e encontra uma clareira. O que faz?",
        alternativas: [
            {
                texto: "Explora a clareira.",
                afirmacao: ["Você explora a clareira e encontra uma nova caverna. O que faz?"],
                proxima: 54,
            },
            {
                texto: "Volta para a trilha.",
                afirmacao: ["Você volta para a trilha e encontra um abrigo. O que faz?"],
                proxima: 55,
            },
        ]
    },
    {
        enunciado: "Você explora o abrigo e encontra uma passagem secreta. O que faz?",
        alternativas: [
            {
                texto: "Segue pela passagem.",
                afirmacao: ["Você segue pela passagem e encontra uma ponte. O que faz?"],
                proxima: 56,
            },
            {
                texto: "Ignora a passagem e volta para a floresta.",
                afirmacao: ["Você volta para a floresta e encontra uma nova trilha. O que faz?"],
                proxima: 57,
            },
        ]
    },
    {
        enunciado: "Você explora a nova caverna e encontra uma saída para a floresta. O que faz?",
        alternativas: [
            {
                texto: "Segue pela saída.",
                afirmacao: ["Você segue pela saída e encontra uma ponte. O que faz?"],
                proxima: 58,
            },
            {
                texto: "Explora mais a caverna.",
                afirmacao: ["Você explora mais a caverna e encontra uma clareira. O que faz?"],
                proxima: 59,
            },
        ]
    }
];
