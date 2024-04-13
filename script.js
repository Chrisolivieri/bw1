const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];

let punteggioUtente = 0

const correctAnswers = questions.map(question => question.correct_answer)

const consentCheckbox = document.getElementById("consent");
const proceed = document.getElementById("button");


function inizioQuiz() {
    if (consentCheckbox.checked) {
        svuotaPagina()
        domandaUno()
    } else {
        alert("Devi spuntare la casella per proseguire!")
    }
}

function svuotaPagina() {
    const emptyPage = document.getElementsByTagName("body")[0]
    emptyPage.innerHTML = "";  
}

function domandaUno(){

  let questionNumber = 0
  let inc = 0
  let i = 1
  let l = 1
  let numRisposte = 0
  const input = []
  const label = []

  const divLogo = document.createElement("div")
  divLogo.id = "logoTimer"
  document.body.appendChild(divLogo)

  const containerLogo = document.getElementById("logoTimer")
  const logo = document.createElement("img")
  logo.src = "assets/epicode_logo.png"
  containerLogo.appendChild(logo)

  const containerTimer = document.getElementById("logoTimer")
  const timer = document.createElement("div")
  timer.id = "timer"
  timer.textContent = "25";
  containerTimer.appendChild(timer);
  const timerDisplay = document.getElementById('timer')

  let seconds = 25
  
      function countdown(){
        seconds--
        timerDisplay.textContent = seconds;
        if(seconds === 0){
          svuotaPagina()
          domandaDue()
        } return
      }
      setInterval(countdown, 1000)

  const title = document.createElement("h1")
  title.textContent = questions[questionNumber].question
  console.log(questions[questionNumber].question)
  document.body.appendChild(title)

  const buttonsContainer = document.createElement("div")
  buttonsContainer.id = "buttonsContainer"
  document.body.appendChild(buttonsContainer)

  input[i] = document.createElement("input")
  input[i].type = "radio"
  input[i].id = "choice" + i
  input[i].name = "choice"

  label[l] = document.createElement("label")
  label[l].textContent = questions[questionNumber].correct_answer
  label[l].setAttribute("for","choice"+ i)

  buttonsContainer.appendChild(input[i])
  buttonsContainer.appendChild(label[l])

  numRisposte++

    console.log("numero risposte" + numRisposte)
    console.log("numero domande incorrette" + inc)
    console.log("numero input" + i)
    console.log("numero label" + l)

  do {
    i++
    l++
    numRisposte++
    
    input[i] = document.createElement("input")
    input[i].type = "radio"
    input[i].id = "choice" + i
    input[i].name = "choice"

    label[l] = document.createElement("label")
    label[l].textContent = questions[questionNumber].incorrect_answer[inc]
    label[l].setAttribute("for","choice" + i)

    buttonsContainer.appendChild(input[i])
    buttonsContainer.appendChild(label[l])

    inc++

    console.log("numero risposte" + numRisposte)
    console.log("numero domande incorrette" + inc)
    console.log("numero input" + i)
    console.log("numero label" + l)

  } while (inc <=2)
    const submit = document.createElement("input")
    submit.type = "submit"
    submit.id = "submit"

    document.body.appendChild(submit)

    i=1
    l=1

    const send = document.getElementById("submit")
    send.addEventListener("click", function() {
      for(i <= numRisposte; i++; l++){
      if (input[i].checked) {
        if(label[l] == questions[questionNumber].correct_answer){         //risposta corretta impostata a mano
          punteggioUtente++
          }
            svuotaPagina()
            domandaDue()
            console.log(punteggioUtente)
        } else {
            alert("Seleziona una risposta prima di procedere")
        }
      }  
    })

}
