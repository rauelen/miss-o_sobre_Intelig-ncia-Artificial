const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual a data da independênica do Brasil?",
        alternativas: ["07 de Setembro","15 de Novembro","21 de Abril"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },


];


let atual = 0;
let perguntaAtual;

function mostraPergunta(){
perguntaAtual =  perguntas[atual];
caixaPergunta.textContent = perguntaAtual.enunciado;

}

mostraPergunta();















