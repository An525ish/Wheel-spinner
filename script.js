const btn = document.querySelector('.inner-circle')
const spinner = document.querySelector('.spinner')
const drop = document.querySelector('.drop')
const innerLed = document.querySelectorAll('.circle')
const bulb = document.querySelector('.bulbs')
const question = document.querySelector('.game-quiz-container')
const tri = document.querySelectorAll('.tri')
const container = document.querySelector('.container')
const coins = document.querySelector('p .coins')
let min = 1000;
let max = 9999;

deg = 0;

btn.addEventListener('click', ()=>{
    deg += (Math.floor(Math.random() * (min-max)) + max);
    btn.style.pointerEvents = "none";
    bulb.style.pointerEvents = "none"
    spinner.style.transform = `rotate(${deg}deg)`;
    setTimeout(() => {
      btn.style.pointerEvents = "auto";
      bulb.style.pointerEvents = "auto"
      handleWin(deg);
      question.classList.remove('hidden');
      container.style.filter = "blur(4px) brightness(.3)"
      }, 6000);
})

innerLed.forEach(led => {
  led.addEventListener('click', (e)=>{
    deg += (Math.floor(Math.random() * (min-max)) + max);
    bulb.style.pointerEvents = "none"
    btn.style.pointerEvents = "none";
    spinner.style.transform = `rotate(${deg}deg)`;
    setTimeout(() => {
    bulb.style.pointerEvents = "auto";
    btn.style.pointerEvents = "auto"
    handleWin(deg);
    question.classList.remove('hidden');
    container.style.filter = "blur(4px) brightness(.3)"
    }, 6000);
  })
});

    var typed = new Typed('.auto-type',{
        strings : ["","Let's start the game of Fortune...","Click on the middle of the fortune wheel to try your luck"],
        typeSpeed : 50,
        backSpeed : 50,
        loop : false
    })

    let wheelsize = 45;
    let wheelItem = 0;
    const symbols = {
        1 : 1,
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
    }


    function handleWin(deg){
        for (let i = 0; deg > 360; i++) {
            deg %= 360
        }
        const winningNum = Math.floor(10 - (deg/40))
        let wheelItemIndex = 0;
        wheelItemIndex = winningNum == 0 || winningNum == 9 ? 1 : winningNum;
        // console.log(wheelItemIndex)
        if(playerScore == 5){
            coins.innerText = wheelItemIndex;
            const start = () => {
                setTimeout(function() {
                    confetti.start()
                }, 1000);
            };
            const stop = () => {
                setTimeout(function() {
                    confetti.stop()
                }, 3000);
            };
            start();
            stop();
        }
        else{
            coins.innerText = 0;
        }
    }


const questions = [
  {
      question: "How many days makes a week ?",
      optionA: "10 days",
      optionB: "14 days",
      optionC: "5 days",
      optionD: "7 days",
      correctOption: "optionD"
  },

  {
      question: "How many players are allowed on a soccer pitch ?",
      optionA: "10 players",
      optionB: "11 players",
      optionC: "9 players",
      optionD: "12 players",
      correctOption: "optionB"
  },

  {
      question: "Who was the first President of USA ?",
      optionA: "Donald Trump",
      optionB: "Barack Obama",
      optionC: "Abraham Lincoln",
      optionD: "George Washington",
      correctOption: "optionD"
  },

  {
      question: "30 days has ______ ?",
      optionA: "January",
      optionB: "December",
      optionC: "June",
      optionD: "August",
      correctOption: "optionC"
  },

  {
      question: "How manay hours can be found in a day ?",
      optionA: "30 hours",
      optionB: "38 hours",
      optionC: "48 hours",
      optionD: "24 hours",
      correctOption: "optionD"
  },

  {
      question: "Which is the longest river in the world ?",
      optionA: "River Nile",
      optionB: "Long River",
      optionC: "River Niger",
      optionD: "Lake Chad",
      correctOption: "optionA"
  },

  {
      question: "_____ is the hottest Continent on Earth ?",
      optionA: "Oceania",
      optionB: "Antarctica",
      optionC: "Africa",
      optionD: "North America",
      correctOption: "optionC"
  },

  {
      question: "Which country is the largest in the world ?",
      optionA: "Russia",
      optionB: "Canada",
      optionC: "Africa",
      optionD: "Egypt",
      correctOption: "optionA"
  },

  {
      question: "Which of these numbers is an odd number ?",
      optionA: "Ten",
      optionB: "Twelve",
      optionC: "Eight",
      optionD: "Eleven",
      correctOption: "optionD"
  },

  {
      question: `"You Can't see me" is a popular saying by`,
      optionA: "Eminem",
      optionB: "Bill Gates",
      optionC: "Chris Brown",
      optionD: "John Cena",
      correctOption: "optionD"
  },

  {
      question: "Where is the world tallest building located ?",
      optionA: "Africa",
      optionB: "California",
      optionC: "Dubai",
      optionD: "Italy",
      correctOption: "optionC"
  },

  {
      question: "The longest river in the United Kingdom is ?",
      optionA: "River Severn",
      optionB: "River Mersey",
      optionC: "River Trent",
      optionD: "River Tweed",
      correctOption: "optionA"
  },


  {
      question: "How many permanent teeth does a dog have ?",
      optionA: "38",
      optionB: "42",
      optionC: "40",
      optionD: "36",
      correctOption: "optionB"
  },

  {
      question: "Which national team won the football World cup in 2018 ?",
      optionA: "England",
      optionB: "Brazil",
      optionC: "Germany",
      optionD: "France",
      correctOption: "optionD"
  },

  {
      question: "Which US state was Donald Trump Born ?",
      optionA: "New York",
      optionB: "California",
      optionC: "New Jersey",
      optionD: "Los Angeles",
      correctOption: "optionA"
  },

  {
      question: "How man states does Nigeria have ?",
      optionA: "24",
      optionB: "30",
      optionC: "36",
      optionD: "37",
      correctOption: "optionC"
  },

  {
      question: "____ is the capital of Nigeria ?",
      optionA: "Abuja",
      optionB: "Lagos",
      optionC: "Calabar",
      optionD: "Kano",
      correctOption: "optionA"
  },

  {
      question: "Los Angeles is also known as ?",
      optionA: "Angels City",
      optionB: "Shining city",
      optionC: "City of Angels",
      optionD: "Lost Angels",
      correctOption: "optionC"
  },

  {
      question: "What is the capital of Germany ?",
      optionA: "Georgia",
      optionB: "Missouri",
      optionC: "Oklahoma",
      optionD: "Berlin",
      correctOption: "optionD"
  },

  {
      question: "How many sides does an hexagon have ?",
      optionA: "Six",
      optionB: "Sevene",
      optionC: "Four",
      optionD: "Five",
      correctOption: "optionA"
  },

  {
      question: "How many planets are currently in the solar system ?",
      optionA: "Eleven",
      optionB: "Seven",
      optionC: "Nine",
      optionD: "Eight",
      correctOption: "optionD"
  },

  {
      question: "Which Planet is the hottest ?",
      optionA: "Jupitar",
      optionB: "Mercury",
      optionC: "Earth",
      optionD: "Venus",
      correctOption: "optionB"
  },

  {
      question: "where is the smallest bone in human body located?",
      optionA: "Toes",
      optionB: "Ears",
      optionC: "Fingers",
      optionD: "Nose",
      correctOption: "optionB"
  },

  {
      question: "How many hearts does an Octopus have ?",
      optionA: "One",
      optionB: "Two",
      optionC: "Three",
      optionD: "Four",
      correctOption: "optionC"
  },

  {
      question: "How many teeth does an adult human have ?",
      optionA: "28",
      optionB: "30",
      optionC: "32",
      optionD: "36",
      correctOption: "optionC"
  }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
  while (shuffledQuestions.length <= 4) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })

  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "lightgreen"
          playerScore++ //adding to player's score
          indexNumber++ //adding 1 to index so has to display next question..
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "rgb(255, 101, 101)"
          document.getElementById(correctOption).style.backgroundColor = "lightgreen"
          wrongAttempt++ //adds 1 to wrong attempts 
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}

const body = document.querySelector('body');
body.addEventListener('load', NextQuestion(0))

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer() //check if player picked right or wrong option
  unCheckRadioButtons()
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
      if (indexNumber <= 4) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 2) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 3 && playerScore < 4) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 5) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 5) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"
  handleWin(deg)

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  question.classList.add('hidden');
  document.getElementById('score-modal').style.display = "none"
  container.style.filter = "none";

}

//function to close warning modal
function closeOptionModal() {
    question.classList.add('hidden');
  document.getElementById('option-modal').style.display = "none"
  container.style.filter = "none";
}
    