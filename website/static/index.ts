// Creates the score that is stored locally.
function Init_Score() {
    localStorage.setItem("Score", '0');
}

// 
function Add_Score() {
    let Score = localStorage.getItem("Score");
    /* Does a null test:
    a. Because its good practice
    b. Stops VSCode from throwing annoying erros
    */
    if (Score == null){let Score = 0}
    else {
        // Need to have the score be recorded as a number.
        let Num_Score = parseInt(Score);
        Num_Score++;
        Score = Num_Score.toString();
        localStorage.setItem("Score", Score);
    }   
}



// Turns on an LED
function Turn_On_LED(){
    // Sends post request to a link, tell RPi to turn on LED
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
}