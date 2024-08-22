export const perguntas = [
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
historia: "Você continua explorando e encontra uma clareira. O que faz?",
proxima: 30,
},
]
},
{
enunciado: "Você volta para a trilha e encontra uma clareira. O que faz?",
alternativas: [
{
texto: "Explora a clareira.",
historia: "Você explora a clareira e encontra uma ponte. O que faz?",
proxima: 31,
},
{
texto: "Volta para o campo de flores.",
historia: "Você volta para o campo de flores e encontra uma cabana. O que faz?",
proxima: 32,
},
]
},
{
enunciado: "Você encontra uma caverna com uma figura ameaçadora. O que faz?",
alternativas: [
{
texto: "Enfrenta a figura.",
historia: "Você enfrenta a figura e descobre que era sua imaginação. Você encontra uma saída para a floresta. O que faz?",
proxima: 33,
},
{
texto: "Volta para a passagem subterrânea.",
historia: "Você volta para a passagem e encontra uma nova saída. O que faz?",
proxima: 34,
},
]
},
{
enunciado: "Você encontra uma cabana com um mapa para a ponte. O que faz?",
alternativas: [
{
texto: "Segue o mapa.",
historia: "Você segue o mapa e encontra uma ponte. O que faz?",
proxima: 35,
},
{
texto: "Ignora o mapa e explora mais a cabana.",
historia: "Você explora mais a cabana e encontra uma saída para a floresta. O que faz?",
proxima: 36,
},
]
},
{
enunciado: "Você explora o campo de flores e encontra uma cabana. O que faz?",
alternativas: [
{
texto: "Entra na cabana.",
historia: "Dentro da cabana, você encontra uma pista para a ponte. O que faz?",
proxima: 37,
},
{
texto: "Ignora a cabana e segue o campo.",
historia: "Você continua pelo campo e encontra uma clareira. O que faz?",
proxima: 38,
},
]
},
{
enunciado: "Você explora a clareira e encontra uma ponte. O que faz?",
alternativas: [
{
texto: "Atravesse a ponte.",
historia: "Você atravessa a ponte e finalmente volta para casa!",
proxima: 'end-win',
},
{
texto: "Volta para a clareira.",
historia: "Você volta para a clareira e encontra um caminho de volta para a floresta.",
proxima: 'end-lose',
},
]
},
{
enunciado: "Você encontra uma nova saída da passagem subterrânea. O que faz?",
alternativas: [
{
texto: "Segue pela nova saída.",
historia: "Você segue pela nova saída e encontra uma ponte. O que faz?",
proxima: 39,
},
{
texto: "Explora mais a passagem.",
historia: "Você explora mais a passagem e encontra uma caverna com uma figura ameaçadora. O que faz?",
proxima: 40,
},
]
},
{
enunciado: "Você segue o mapa e encontra uma ponte. O que faz?",
alternativas: [
{
texto: "Atravesse a ponte.",
historia: "Você atravessa a ponte e finalmente volta para casa!",
proxima: 'end-win',
},
{
texto: "Volta para o mapa.",
historia: "Você volta para o mapa e encontra uma nova direção para seguir.",
proxima: 'end-lose',
},
]
},
{
enunciado: "Você encontra uma saída para a floresta. O que faz?",
alternativas: [
{
texto: "Segue pela saída.",
historia: "Você segue pela saída e encontra uma ponte. O que faz?",
proxima: 41,
},
{
texto: "Explora mais a área.",
historia: "Você explora mais a área e encontra uma clareira. O que faz?",
proxima: 42,
},
]
},
{
enunciado: "Você volta para a floresta e encontra um caminho de volta para o início. O que faz?",
alternativas: [
{
texto: "Segue o caminho de volta.",
historia: "Você volta ao início e precisa começar novamente.",
proxima: 'end-restart',
},
{
texto: "Ignora o caminho e explora mais.",
historia: "Você continua explorando e encontra uma ponte. O que faz?",
proxima: 43,
},
]
},
{
enunciado: "Você explora a caverna e encontra um mapa para a ponte. O que faz?",
alternativas: [
{
texto: "Segue o mapa.",
historia: "Você segue o mapa e encontra uma ponte. O que faz?",
proxima: 44,
},
{
texto: "Ignora o mapa e volta para a entrada da caverna.",
historia: "Você volta para a entrada da caverna e encontra uma nova direção para seguir.",
proxima: 'end-lose',
},
]
},
{
enunciado: "Você volta para a entrada da caverna e encontra uma nova direção. O que faz?",
alternativas: [
{
texto: "Segue a nova direção.",
historia: "Você segue a nova direção e encontra uma ponte. O que faz?",
proxima: 45,
},
{
texto: "Ignora a nova direção e continua explorando.",
historia: "Você continua explorando e se perde novamente.",
proxima: 'end-lose',
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
}
],