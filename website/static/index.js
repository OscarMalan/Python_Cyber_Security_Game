// This is an adjacent file with questions and answers - Matt
const questions = [
    {
        question: "What is Cyber Security?",
        optionA: "Security against malware",
        optionB: "Preventing cyber-terrorists",
        optionC: "Preventing cyber-attacks",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "what is Cryptography used for?",
        optionA: "To turn on computers",
        optionB: "Making cryptic graphs",
        optionC: "To start up fortnite",
        optionD: "Updating Windows",
        correctOption: "optionB"
    },

    {
        question: "What does Cyber Security protect?",
        optionA: "It protects criminals",
        optionB: "It protects systems",
        optionC: "It protects hackers",
        optionD: "None of the mentioned",
        correctOption: "optionB"
    },

    {
        question: "What are the features of Cyber Security?",
        optionA: "Compliance",
        optionB: "Scarying bad actors",
        optionC: "Threat prevention",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "What is not a Cybercrime?",
        optionA: "Denial of Service (DOS)",
        optionB: "Man in the Middle",
        optionC: "Malware",
        optionD: "AES",
        correctOption: "optionD"
    },

    {
        question: "What is a disadvantage of Cyber Security?",
        optionA: "Makes the system slower",
        optionB: "Computercrashing",
        optionC: "Gives privacy to users",
        optionD: "Prevents Cyber attacks",
        correctOption: "optionA"
    },

    {
        question: "Which of the following acts violates Cyber Security?",
        optionA: "Exploits",
        optionB: "Attacks",
        optionC: "Threats",
        optionD: "Vulnerability",
        correctOption: "optionB"
    },

    {
        question: "Which of the following acts compromises Cyber Security?",
        optionA: "Vulnerability",
        optionB: "Attacks",
        optionC: "Threats",
        optionD: "Exploits",
        correctOption: "optionC"
    },

    {
        question: "What is the most common thing Cyber Attackers target?",
        optionA: "IP",
        optionB: "Emails",
        optionC: "Websites",
        optionD: "Web Pages",
        correctOption: "optionC"
    },

    {
        question: "What is a firewall?",
        optionA: "A door lock",
        optionB: "A fire saftey for systems",
        optionC: "Turning on a computer",
        optionD: "For protecting a network",
        correctOption: "optionD"
    },

    {
        question: "How does a firewall work?",
        optionA: "Acts as a fireproof wall",
        optionB: "Finds viruses on a computer",
        optionC: "Filters access to a network",
        optionD: "Helps tell the time",
        correctOption: "optionC"
    },

    {
        question: "What software identifies and deletes a virus?",
        optionA: "Anti-virus software",
        optionB: "Firewall",
        optionC: "Utility software",
        optionD: "Google Chrome",
        correctOption: "optionA"
    },


    {
        question: "What operating system is still supported for secruity patches?",
        optionA: "Windows 8",
        optionB: "Windows 10",
        optionC: "Windows XP",
        optionD: "Windows 7",
        correctOption: "optionB"
    },

    {
        question: "Why is a unsupported operating system not secure?",
        optionA: "Isnt compatable on system",
        optionB: "No longer works",
        optionC: "Bad firewall",
        optionD: "No secruity patches",
        correctOption: "optionD"
    },

    {
        question: "When will windows 10 no longer be supported?",
        optionA: "October 14th 2025",
        optionB: "July 2nd 2029",
        optionC: "September 25th 2023",
        optionD: "October 2nd 2024",
        correctOption: "optionA"
    },

    {
        question: "What is the weakness in a Computer System called?",
        optionA: "An attack",
        optionB: "An exploit",
        optionC: "A vulnerability",
        optionD: "A threat",
        correctOption: "optionC"
    },

    {
        question: "why is HTTP less secure that HTPPS",
        optionA: "No encryption verification",
        optionB: "Because its not supported",
        optionC: "It isnt less secure",
        optionD: "I dont know",
        correctOption: "optionA"
    },
    {
        question: "What isn't an example of a cyber attack?",
        optionA: "Damaging an IT system",
        optionB: "Turning on a pc",
        optionC: "Breaking into a system",
        optionD: "Downloading a malware",
        correctOption: "optionB"
    },

    {
        question: "Which is not a example of why a company needs cyber security?",
        optionA: "To protect personal data",
        optionB: "To sell more products",
        optionC: "To protect their systems",
        optionD: "To protect customer data",
        correctOption: "optionB"
    },

   

]


let shuffledQuestions = [] // Empty array to hold shuffled selected questions

function handleQuestions() { 
    // Function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
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
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            // Sends an HTTP POST request to the back end to tell it to turn on the LED 
            fetch("http://localhost:8000/correct_answer/", {
                method: 'POST',
                body: JSON.stringify({
                    userId: 1,
                    title: "Turn on LED", 
                completed: false
                }),          
            headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            fetch("http://localhost:8000/incorrect_answer/", {
                method: 'POST',
                body: JSON.stringify({
                    userId: 1,
                    title: "Incorrect",
                    completed: false
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8" 
                 }
                })
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
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
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

    // Tell server to reset the LED count
    fetch("http://localhost:8000/reset_led/", {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: "reset",
            completed: false
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8" 
         }
        })

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}