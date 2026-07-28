// ==============================
// BOTÃO DA MENSAGEM INICIAL
// ==============================

const btnMensagem = document.getElementById("btnMensagem");

btnMensagem.addEventListener("click", () => {

    alert("Feliz aniversário, vó! 🌻💛\n\nQue Deus continue iluminando seus dias com saúde, paz e muito amor.");

});

// ==============================
// 64 MOTIVOS
// ==============================

const motivos = [

"Porque seu abraço é o melhor do mundo. 🤗",
"Porque seu sorriso ilumina nossos dias. ☀️",
"Porque você sempre nos acolhe com carinho. ❤️",
"Porque sua força inspira toda a família.",
"Porque seus conselhos valem ouro.",
"Porque você sempre acredita em nós.",
"Porque seu amor é infinito.",
"Porque sua presença torna tudo melhor.",
"Porque você sempre sabe confortar.",
"Porque sua alegria contagia todos.",
"Porque sua bondade é admirável.",
"Porque você faz qualquer lugar parecer um lar.",
"Porque suas histórias são inesquecíveis.",
"Porque você nos ensina todos os dias.",
"Porque sua fé nos fortalece.",
"Porque seu coração é enorme.",
"Porque você sempre cuida da família.",
"Porque sua dedicação é inspiradora.",
"Porque você merece toda felicidade do mundo.",
"Porque você é única. 🌻"

];

const textoMotivo = document.getElementById("motivo");
const botaoMotivo = document.getElementById("novoMotivo");

botaoMotivo.addEventListener("click", () => {

    const numero = Math.floor(Math.random() * motivos.length);

    textoMotivo.innerHTML = motivos[numero];

});

// ==============================
// CARTA
// ==============================

const abrirCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("textoCarta");

abrirCarta.addEventListener("click", () => {

    if(carta.style.display === "block"){

        carta.style.display = "none";
        abrirCarta.innerHTML = "Abrir Carta";

    }else{

        carta.style.display = "block";
        abrirCarta.innerHTML = "Fechar Carta";

    }

});

// ==============================
// POPUP FINAL
// ==============================

const popup = document.getElementById("popup");
const surpresa = document.getElementById("surpresaFinal");
const fechar = document.getElementById("fechar");

surpresa.addEventListener("click", () => {

    popup.style.display = "flex";

});

fechar.addEventListener("click", () => {

    popup.style.display = "none";

});

// Fecha clicando fora da caixa

window.addEventListener("click", (evento)=>{

    if(evento.target == popup){

        popup.style.display = "none";

    }

});

// ==============================
// EFEITO AO ROLAR A PÁGINA
// ==============================

const secoes = document.querySelectorAll("section");

function revelar(){

    secoes.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if(topo < window.innerHeight - 120){

            secao.style.opacity = "1";
            secao.style.transform = "translateY(0px)";

        }

    });

}

secoes.forEach(secao => {

    secao.style.opacity = "0";
    secao.style.transform = "translateY(50px)";
    secao.style.transition = ".8s";

});

window.addEventListener("scroll", revelar);

revelar();

// ==============================
// TÍTULO PISCANDO
// ==============================

const titulo = document.querySelector(".inicio h1");

setInterval(() => {

    titulo.style.opacity = "0.6";

    setTimeout(() => {

        titulo.style.opacity = "1";

    },500);

},2500);

// ==============================
// MENSAGEM NO CONSOLE
// ==============================

console.log("🌻 Feliz aniversário para a melhor vó do mundo! ❤️");