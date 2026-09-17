import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;


const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o impacto da retirada clandestina de um fóssil de seu local de origem?",
        alternativas: [
            {
                texto: "Destrói o contexto geológico (camada do solo e fósseis associados), o que impede paleontólogos de determinar a idade exata e o ecossistema da época.",
                afirmacao: "Você é uma pessoa analítica. Observa os detalhes, compreende processos complexos e prioriza fatos e métodos antes de tirar conclusões.",
                "Você é orientado por dados e raciocínio lógico. Analisa as pormenores, descomplica fluxos complexos e só consolida um diagnóstico após testar metodologias e validar informações reais."
                
            },
            {
                texto:  "Não altera em nada o estudo científico, pois o importante é a peça estar preservada, pouco importando a camada de rocha",
                afirmacao: "Você é uma pessoa pragmática. Foca na utilidade direta e no resultado visível das coisas, tendendo a ignorar teorias ou detalhes do contexto.",
                "Você opera de forma totalmente funcional. Valida ideias exclusivamente pelos seus frutos e pela aplicabilidade imediata no dia a dia, descartando qualquer excesso teórico ou burocracia que não contribua diretamente para alcançar o objetivo final."
    
            }    
           
        ]
    },
    {
       
            enunciado: "Como a legislação trata os fósseis encontrados em solo nacional?",
            alternativas: [
                {
                    texto: "São patrimônio público. A venda, exploração comercial ou exportação sem autorização constitui crime.",
                    afirmacao: "Você é uma pessoa comunitária. Valoriza o bem-estar coletivo, as regras sociais e acredita que os recursos de um país pertencem a todos.",
                    "Você coloca o bem de todos em primeiro lugar. Acredita na união, no respeito às regras de convivência e na ideia de que os recursos de um país devem beneficiar toda a sociedade."
                
                },
                {
                    texto:  "Se o fóssil for achado em propriedade privada, o dono do terreno tem o direito de vendê-lo para quem quiser, pois o solo é dele. ",
                    afirmacao: "Você é uma pessoa individualista. Defende com firmeza a autonomia pessoal, a liberdade de mercado e o direito à propriedade privada.",
                    ""
                }    
               
            ]
        },
        {
            enunciado: "Qual é o papel dos colecionadores privados no mercado de fósseis?",

            alternativas: [
                {
                    texto: "A compra privada retira o fóssil do alcance do público e da pesquisa acadêmica, estimulando o tráfico ilegal.",
                    afirmacao: "Você é uma pessoa reflexiva. Pensa nas consequências de longo prazo de cada ato e se preocupa com o acesso democrático ao conhecimento.",
                    "Você analisa o impacto futuro de cada escolha e defende o saber como um direito de todos. Prioriza soluções sustentáveis ao longo do tempo e a livre circulação de ideias na sociedade."
                },
                {
                    texto:    "Colecionadores privados são os salvadores da ciência, pois cuidam melhor das peças do que os museus públicos.",
               
                    afirmacao: "Você é uma pessoa Cética das Instituições. Prefere confiar na iniciativa privada e na capacidade individual do que na gestão governamental.",
                    "Você desconfia da eficácia do Estado e da burocracia pública. Acredita que a inovação do setor privado e a responsabilidade de cada indivíduo trazem soluções muito mais eficientes do que a intervenção governamental."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();