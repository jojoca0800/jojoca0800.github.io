// Perguntas do quiz
const questions = [
  {
    id: 1,
    question: "Qual é a ave mais rápida do mundo em voo?",
    options: ["Águia-dourada", "Falcão-peregrino", "Andorinhão-comum", "Gavião-real", "Beija-flor"],
    correctAnswer: 1,
    explanation: "O falcão-peregrino pode atingir velocidades de até 390 km/h em mergulho!",
  },
  {
    id: 2,
    question: "Qual ave é conhecida por não conseguir voar, mas é excelente nadadora?",
    options: ["Avestruz", "Emu", "Pinguim", "Casuar", "Kiwi"],
    correctAnswer: 2,
    explanation: "Os pinguins são aves aquáticas que 'voam' debaixo d'água usando suas nadadeiras!",
  },
  {
    id: 3,
    question: "Qual é a maior ave do mundo?",
    options: ["Condor-dos-andes", "Albatraz-errante", "Avestruz", "Emu", "Casuar"],
    correctAnswer: 2,
    explanation: "O avestruz pode chegar a 2,7 metros de altura e pesar até 150 kg!",
  },
  {
    id: 4,
    question: "Qual ave é famosa por sua capacidade de imitar sons e falar?",
    options: ["Canário", "Bem-te-vi", "Papagaio", "Sabiá", "Curió"],
    correctAnswer: 2,
    explanation: "Os papagaios têm uma estrutura vocal única que permite imitar diversos sons!",
  },
  {
    id: 5,
    question: "Qual ave constrói os ninhos mais elaborados e coloridos para atrair parceiras?",
    options: ["Bem-te-vi", "João-de-barro", "Ave-do-paraíso", "Sabiá-laranjeira", "Uirapuru"],
    correctAnswer: 2,
    explanation: "As aves-do-paraíso machos criam verdadeiras obras de arte para impressionar as fêmeas!",
  },
  {
    id: 6,
    question: "Qual é o menor pássaro do mundo?",
    options: ["Beija-flor-abelha", "Cambacica", "Bem-te-vi-pequeno", "Corruíra", "Saíra-militar"],
    correctAnswer: 0,
    explanation: "O beija-flor-abelha mede apenas 5-6 cm e pesa cerca de 2 gramas!",
  },
  {
    id: 7,
    question: "Qual ave brasileira é conhecida como 'engenheiro da natureza'?",
    options: ["Bem-te-vi", "Sabiá", "João-de-barro", "Uirapuru", "Curió"],
    correctAnswer: 2,
    explanation: "O joão-de-barro constrói ninhos de barro com arquitetura complexa e câmaras separadas!",
  },
  {
    id: 8,
    question: "Qual ave migra a maior distância anualmente?",
    options: ["Andorinha", "Trinta-réis-ártico", "Ganso-bravo", "Cegonha-branca", "Falcão-peregrino"],
    correctAnswer: 1,
    explanation: "O trinta-réis-ártico voa cerca de 70.000 km por ano, do Ártico à Antártica!",
  },
]

// Estado do jogo
let currentQuestion = 0
let score = 0
let selectedAnswer = null
let answeredQuestions = new Array(questions.length).fill(false)

// Elementos DOM
const gameScreen = document.getElementById("gameScreen")
const finalScreen = document.getElementById("finalScreen")
const questionCounter = document.getElementById("questionCounter")
const scoreDisplay = document.getElementById("scoreDisplay")
const progressFill = document.getElementById("progressFill")
const questionText = document.getElementById("questionText")
const optionsContainer = document.getElementById("optionsContainer")
const explanationContainer = document.getElementById("explanationContainer")
const resultMessage = document.getElementById("resultMessage")
const explanationText = document.getElementById("explanationText")
const nextButtonContainer = document.getElementById("nextButtonContainer")
const nextButton = document.getElementById("nextButton")
const questionIndicators = document.getElementById("questionIndicators")
const finalScore = document.getElementById("finalScore")
const finalMessage = document.getElementById("finalMessage")
const finalProgressFill = document.getElementById("finalProgressFill")
const finalPercentage = document.getElementById("finalPercentage")
const restartButton = document.getElementById("restartButton")

// Inicializar o jogo
function initGame() {
  createQuestionIndicators()
  loadQuestion()
}

// Criar indicadores de perguntas
function createQuestionIndicators() {
  questionIndicators.innerHTML = ""
  for (let i = 0; i < questions.length; i++) {
    const indicator = document.createElement("div")
    indicator.className = "indicator"
    if (i === currentQuestion) {
      indicator.classList.add("current")
    }
    questionIndicators.appendChild(indicator)
  }
}

// Carregar pergunta atual
function loadQuestion() {
  const question = questions[currentQuestion]

  // Atualizar informações
  questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`
  scoreDisplay.textContent = `Pontuação: ${score}`
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`
  questionText.textContent = question.question

  // Limpar estado anterior
  selectedAnswer = null
  explanationContainer.classList.add("hidden")
  nextButtonContainer.classList.add("hidden")

  // Criar opções
  optionsContainer.innerHTML = ""
  question.options.forEach((option, index) => {
    const button = document.createElement("button")
    button.className = "option-button"
    button.innerHTML = `
            <span>${String.fromCharCode(65 + index)}. ${option}</span>
            <span class="option-icon"></span>
        `
    button.addEventListener("click", () => selectAnswer(index))
    optionsContainer.appendChild(button)
  })

  // Atualizar indicadores
  updateIndicators()
}

// Selecionar resposta
function selectAnswer(answerIndex) {
  if (selectedAnswer !== null) return

  selectedAnswer = answerIndex
  const question = questions[currentQuestion]
  const buttons = optionsContainer.querySelectorAll(".option-button")

  // Desabilitar todos os botões
  buttons.forEach((button) => (button.disabled = true))

  // Aplicar estilos baseados na resposta
  buttons.forEach((button, index) => {
    const icon = button.querySelector(".option-icon")

    if (index === question.correctAnswer) {
      button.classList.add("correct")
      icon.textContent = "✅"
    } else if (index === selectedAnswer && index !== question.correctAnswer) {
      button.classList.add("incorrect")
      icon.textContent = "❌"
    } else {
      button.classList.add("disabled")
    }
  })

  // Atualizar pontuação
  if (answerIndex === question.correctAnswer) {
    score++
    scoreDisplay.textContent = `Pontuação: ${score}`
  }

  // Marcar pergunta como respondida
  answeredQuestions[currentQuestion] = true

  // Mostrar explicação
  showExplanation()

  // Atualizar indicadores
  updateIndicators()
}

// Mostrar explicação
function showExplanation() {
  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  resultMessage.textContent = isCorrect ? "Correto! 🎉" : "Resposta incorreta 😔"
  explanationText.textContent = question.explanation

  explanationContainer.classList.remove("hidden")
  nextButtonContainer.classList.remove("hidden")

  // Atualizar texto do botão
  nextButton.textContent = currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado Final"
}

// Próxima pergunta
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++
    loadQuestion()
  } else {
    showFinalScreen()
  }
}

// Atualizar indicadores
function updateIndicators() {
  const indicators = questionIndicators.querySelectorAll(".indicator")
  indicators.forEach((indicator, index) => {
    indicator.className = "indicator"
    if (index === currentQuestion) {
      indicator.classList.add("current")
    } else if (answeredQuestions[index]) {
      indicator.classList.add("answered")
    }
  })
}

// Mostrar tela final
function showFinalScreen() {
  gameScreen.classList.add("hidden")
  finalScreen.classList.remove("hidden")

  const percentage = (score / questions.length) * 100

  finalScore.textContent = `${score}/${questions.length}`
  finalMessage.textContent = getScoreMessage(percentage)
  finalPercentage.textContent = `Você acertou ${Math.round(percentage)}% das perguntas`

  // Animar barra de progresso
  setTimeout(() => {
    finalProgressFill.style.width = `${percentage}%`
  }, 500)
}

// Obter mensagem baseada na pontuação
function getScoreMessage(percentage) {
  if (percentage >= 90) return "🏆 Excelente! Você é um expert em aves!"
  if (percentage >= 70) return "🎉 Muito bom! Você conhece bem as aves!"
  if (percentage >= 50) return "👍 Bom trabalho! Continue aprendendo sobre aves!"
  return "📚 Que tal estudar mais sobre essas incríveis criaturas?"
}

// Reiniciar jogo
function restartGame() {
  currentQuestion = 0
  score = 0
  selectedAnswer = null
  answeredQuestions = new Array(questions.length).fill(false)

  finalScreen.classList.add("hidden")
  gameScreen.classList.remove("hidden")

  initGame()
}

// Event listeners
nextButton.addEventListener("click", nextQuestion)
restartButton.addEventListener("click", restartGame)

// Inicializar o jogo quando a página carregar
document.addEventListener("DOMContentLoaded", initGame)
