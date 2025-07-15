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
  {
    id: 9,
    question: "Qual é a principal função da glândula uropigiana nas aves?",
    options: ["Produzir som", "Lubrificar as penas", "Regular temperatura", "Absorver nutrientes", "Estimular a digestão"],
    correctAnswer: 1,
    explanation: "A glândula uropigiana secreta uma substância oleosa usada para impermeabilizar e manter as penas.",
  },
  {
    id: 10,
    question: "Como as aves eliminam o excesso de nitrogênio do organismo?",
    options: ["Ureia", "Amoníaco", "Ácido úrico", "Ácido lático", "Creatinina"],
    correctAnswer: 2,
    explanation: "As aves excretam ácido úrico, que é menos tóxico e economiza água, sendo ideal para vida aérea e terrestre.",
  },
  {
    id: 11,
    question: "Qual parte do sistema digestivo das aves tritura os alimentos ingeridos?",
    options: ["Papo", "Moela", "Intestino delgado", "Esôfago", "Cloaca"],
    correctAnswer: 1,
    explanation: "A moela é uma estrutura muscular que tritura alimentos, frequentemente com auxílio de pequenas pedras.",
  },
  {
    id: 12,
    question: "Por que as aves têm visão tão desenvolvida?",
    options: ["Por causa do olfato fraco", "Para compensar a audição", "Por viverem no escuro", "Para caçar e voar com precisão", "Para regular a temperatura"],
    correctAnswer: 3,
    explanation: "A visão é essencial para voo e caça, sendo extremamente aguçada nas aves.",
  },
  {
    id: 13,
    question: "Qual das opções abaixo é uma ave de hábito exclusivamente noturno?",
    options: ["Gavião", "Andorinha", "Beija-flor", "Coruja", "Tucano"],
    correctAnswer: 3,
    explanation: "As corujas são aves adaptadas à vida noturna, com audição e visão altamente desenvolvidas.",
  },
  {
    id: 14,
    question: "Qual função as penas têm além do voo?",
    options: ["Excreção", "Digestão", "Regulação térmica", "Filtração", "Produção de hormônios"],
    correctAnswer: 2,
    explanation: "As penas ajudam a manter o calor corporal, além de proteger e auxiliar no voo.",
  },
  {
    id: 15,
    question: "Como é chamado o grupo das aves que não voam?",
    options: ["Carinatas", "Neognatas", "Ratitas", "Anseriformes", "Paleognatas"],
    correctAnswer: 2,
    explanation: "Ratitas são aves que perderam a capacidade de voar, como avestruzes e emas.",
  },
  {
    id: 16,
    question: "Qual estrutura ajuda as aves a se orientarem durante migrações?",
    options: ["Siringe", "Sistema linfático", "Magnetorecepção", "Cloaca", "Glândula uropigiana"],
    correctAnswer: 2,
    explanation: "Muitas aves usam a magnetorecepção, percebendo o campo magnético da Terra para navegação.",
  },
  {
    id: 17,
    question: "As aves possuem bexiga urinária?",
    options: ["Sim, como os mamíferos", "Não, eliminam fezes e urina juntas", "Apenas as aquáticas", "Apenas machos", "Apenas em filhotes"],
    correctAnswer: 1,
    explanation: "Aves não possuem bexiga urinária; eliminam excretas nitrogenadas junto às fezes pela cloaca.",
  },
  {
    id: 18,
    question: "O papo das aves tem qual função principal?",
    options: ["Respirar", "Regular temperatura", "Armazenar alimento", "Produzir som", "Filtrar água"],
    correctAnswer: 2,
    explanation: "O papo armazena temporariamente o alimento antes de passar pelo estômago químico e moela.",
  },
  {
    id: 19,
    question: "Como as aves conseguem voar em altitudes elevadas com pouco oxigênio?",
    options: ["Têm mais glóbulos vermelhos", "Usam brânquias pulmonares", "Possuem sacos aéreos e respiração eficiente", "Filtram o ar com a cloaca", "Têm pulmões maiores que os mamíferos"],
    correctAnswer: 2,
    explanation: "Os sacos aéreos permitem uma ventilação contínua e eficiente, essencial para voar em grandes altitudes.",
  },
  {
    id: 20,
    question: "O que indica que as aves descendem de dinossauros terópodes?",
    options: ["Presença de penas e ossos pneumáticos", "Pele escamosa e veneno", "Mandíbula ossificada", "Excreção de ureia", "Cauda longa e óssea"],
    correctAnswer: 0,
    explanation: "As penas e ossos pneumáticos são características que reforçam a origem das aves nos dinossauros terópodes.",
  }
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
