// Handling Score on client side

// let Cookie = document.cookie;

// function Init_Score() {
    // sessionStorage.setItem('Score', 0)
// }

// function Add_Score() {
//     // Score += 1;
//     // console.log(Score);
// }

// Handling Score server side

// function Add_Score() {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "POST", "http://localhost:8000/correct_answer/", false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

function Add_Score(){
    fetch("http://localhost:8000/correct_answer/", {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: "Fix my bugs",
            completed: false
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
}