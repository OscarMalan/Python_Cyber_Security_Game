const questions = [
    {
        question: "what is cyber secruity?",
        optionA: "I dont know",
        optionB: "sweets",
        optionC: "i am hear to learn i dont know",
        optionD: "A way of protecting computers",
        correctOption: "optionD"
    },

    {
        question: "what is Cryptography used for?",
        optionA: "to turn on computers",
        optionB: "to securely comunicate over the internet",
        optionC: "to start up fortnite",
        optionD: "to update my windows 10 system",
        correctOption: "optionB"
    },

    {
        question: "why is cyber secruity important?",
        optionA: "to make computers work",
        optionB: "to protect people from hackers",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionB"
    },

    {
        question: "which is a example of a physical method of secruity?",
        optionA: "January",
        optionB: "playing music loud so people can't hear my password",
        optionC: "creating a secure password",
        optionD: "not giving out passwords",
        correctOption: "optionC"
    },

    {
        question: "whats the best way to make a secure password?",
        optionA: "using 3 random words with capitals and speacial characters",
        optionB: "using speacial characters and capital letters",
        optionC: "using capital letters randomly",
        optionD: "using short easy to remember passwords",
        correctOption: "optionA"
    },

    {
        question: "how quickly can the word password be hacked",
        optionA: "two seconds",
        optionB: "3 hours",
        optionC: "6 hours",
        optionD: "32 hours",
        correctOption: "optionA"
    },

    {
        question: "why is it important to make a secure password?",
        optionA: "to make it hard to login",
        optionB: "to make it harder to remember",
        optionC: "to make it harder to guess for hackers",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "how often does a personal computer get hacked?",
        optionA: "once every 39 seconds",
        optionB: "once every 11 minuets",
        optionC: "once every 2 hours",
        optionD: "once every 39 minuets",
        correctOption: "optionA"
    },

    {
        question: "which one of these is not causing a secruity threat",
        optionA: "not updating operaitng system",
        optionB: "using the password, password ",
        optionC: "leaving your pc on in a public place",
        optionD: "locking your pc",
        correctOption: "optionD"
    },

    {
        question: "what is a firewall?",
        optionA: "a door lock",
        optionB: "a fire saftey for systems",
        optionC: "a way of securely turning on a computer",
        optionD: "a protection method for a network",
        correctOption: "optionD"
    },

    {
        question: "how does a firewall work?",
        optionA: "acts as a fireproof wall",
        optionB: "finds and deletes a virus on a computer",
        optionC: "prevents unauthorized access to a network",
        optionD: "helps tell the time",
        correctOption: "optionC"
    },

    {
        question: "what software identifies and deletes a virus?",
        optionA: "anti virus software",
        optionB: "firewall",
        optionC: "utility software",
        optionD: "google crome",
        correctOption: "optionA"
    },


    {
        question: "what operating system is still supported for secruity patches?",
        optionA: "windows 8",
        optionB: "windows 10",
        optionC: "windows XP",
        optionD: "windows 7",
        correctOption: "optionB"
    },

    {
        question: "why is a unsupported operating system not secure?",
        optionA: "isnt compatable on system",
        optionB: "no longer works",
        optionC: "because they dont have a firewall",
        optionD: "because they no longer recieve secruity patches",
        correctOption: "optionD"
    },

    {
        question: "when will windows 10 no longer be supported?",
        optionA: "october 14th 2025",
        optionB: "july 2nd 2029",
        optionC: "september 25th 2023",
        optionD: "october 2nd 2024",
        correctOption: "optionA"
    },

    {
        question: "what does HTTPS stand for?",
        optionA: "hyper text transfer secruityt",
        optionB: "high trained tick secruity",
        optionC: "hypertext trasnfer protocol secure ",
        optionD: "heavy text transport secruity",
        correctOption: "optionC"
    },

    {
        question: "why is HTTP less secure that HTPPS",
        optionA: "because it doesnt have encryption verification",
        optionB: "because its not supported",
        optionC: "it isnt less secure",
        optionD: "I dont know",
        correctOption: "optionA"
    },

    

   

    {
        question: "What isnt a example of a cyber attack?",
        optionA: "intentionally damaging IT system",
        optionB: "turning on a pc",
        optionC: "accessing a system without permission",
        optionD: "downloading a hack on a system",
        correctOption: "optionB"
    },

    {
        question: "which is not a example of why a company needs cyber security?",
        optionA: "to protect personal data",
        optionB: "to sell more products",
        optionC: "to protect functionality of their systems",
        optionD: "to protect customer data",
        correctOption: "optionB"
    },

   

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
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