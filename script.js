// Perguntas do quiz
const questions = [
  {
    id: 1,
    question: "Qual característica é exclusiva das aves entre os vertebrados?",
    options: ["Sacos aéreos", "Coração com quatro câmaras", "Pele com escamas", "Ossos ocos", "Sangue quente"],
    correctAnswer: 0,
    explanation: "Os sacos aéreos são estruturas exclusivas das aves, que auxiliam na respiração eficiente durante o voo.",
  },
  {
    id: 2,
    question: "Qual estrutura permite que as aves tenham um voo mais eficiente?",
    options: ["Rins metanéfricos", "Ossos densos", "Siringe", "Ossos pneumáticos", "Pele queratinizada"],
    correctAnswer: 3,
    explanation: "Os ossos pneumáticos são ocos e cheios de ar, tornando o esqueleto das aves leve, o que facilita o voo.",
  },
  {
    id: 3,
    question: "A siringe, presente nas aves, tem qual função principal?",
    options: ["Digestão de proteínas", "Produção de sons", "Filtração de sangue", "Respiração", "Regulação térmica"],
    correctAnswer: 1,
    explanation: "A siringe é um órgão exclusivo das aves responsável pela emissão de sons, localizada na base da traqueia.",
  },
  {
    id: 4,
    question: "Qual é o tipo de fecundação das aves?",
    options: ["Externa com desenvolvimento direto", "Interna com desenvolvimento indireto", "Externa com ovos gelatinosos", "Interna com ovos amnióticos", "Brotamento interno"],
    correctAnswer: 3,
    explanation: "As aves têm fecundação interna e seus ovos são amnióticos, adaptados ao ambiente terrestre.",
  },
  {
    id: 5,
    question: "Qual estrutura das penas é responsável pelo encaixe entre os filamentos e a impermeabilidade?",
    options: ["Raque", "Cálamo", "Barbas", "Barbículas", "Siringe"],
    correctAnswer: 3,
    explanation: "As barbículas conectam as barbas das penas, mantendo sua forma e permitindo impermeabilidade.",
  },
  {
    id: 6,
    question: "O que permite às aves manter a temperatura corporal constante (homeotermia)?",
    options: ["Sacos aéreos", "Glândula uropigiana", "Alto metabolismo", "Cloaca", "Ovos com casca rígida"],
    correctAnswer: 2,
    explanation: "O alto metabolismo, junto com penas isolantes, permite às aves manter a homeotermia.",
  },
  {
    id: 7,
    question: "O que diferencia as aves dos répteis, seu grupo ancestral?",
    options: ["Fecundação interna", "Presença de cloaca", "Pele escamosa", "Presença de penas", "Postura de ovos"],
    correctAnswer: 3,
    explanation: "As penas são exclusivas das aves e representam uma importante adaptação evolutiva derivada dos répteis.",
  },
  {
    id: 8,
    question: "Em que grupo taxonômico as aves estão incluídas?",
    options: ["Mamíferos", "Répteis", "Anfíbios", "Peixes ósseos", "Platelmintos"],
    correctAnswer: 1,
    explanation: "As aves são consideradas parte dos répteis modernos, mais especificamente do clado dos arcossauros.",
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
