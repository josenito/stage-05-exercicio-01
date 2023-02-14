const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const imgCookie = document.querySelector("#imgCookie")

let randomNumber = Math.round(Math.random() * 12)
const messages = [
  "Destino não é uma questão de sorte, mas uma questão de escolha",
  "Sucesso nada tem a ver com sorte, mas com determinação e trabalho",
  "Sorte é estar pronto quando a oportunidade vem.",
  "Talvez o amor seja como a sorte: temos de arriscar para o ter.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A sorte de quem trabalha é diretamente proporcional ao azar do preguiçoso.",
  "As flores de amanhã nascem das sementes de hoje.",
  "O encontro da preparação com a oportunidade gera o que chamamos sorte.",
  "O amor modifica, simplifica e amplifica.",
  "Deixe que o vento leve o desnecessário e traga boa novas.",
  "Posso controlar apenas o que digo, não o que você entende.",
  "O sorriso é a melhor resposta para um olhar.",
  "Cultive sonhos grandes e preocupações pequenas."
]

document.addEventListener('keydown', handleKeyEnter)
imgCookie.addEventListener('click', handleOpenCookie)
btnOpen.addEventListener('click', handleOpenNewCookie)


function handleKeyEnter(event) {
  if (event.key == 'Enter' && screen2.classList.contains('hide')) {
    handleOpenCookie()
  }
}

function handleOpenCookie() {
  screen2.querySelector("p").innerText = messages[randomNumber]
  toggleScreen()
}

function handleOpenNewCookie() {
  handleResset()
  toggleScreen()
}


function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

}

function handleResset() {
  randomNumber = Math.round(Math.random() * 12)
}


