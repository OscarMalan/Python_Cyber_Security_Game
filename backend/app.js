const { exec } = require('node:child_process');
// Express is a framework that makes routing and server side logic easier and more readable.
const express = require('express');

LED_On = false;
// Has the express libary in app because its the standard
const app = express();

// Tells the server to send the website to the port 8080
app.listen(3000);
console.log("Listen at: [ip address]:3000");

// Handles the LED process, its just a quick if statement that uses exec to run terminal lines
app.post("/LED_Change", (req, res) => {
    if (LED_On == false) {
        exec('python3 LED_On.py');
        LED_On = true;
    }
    else {
        exec('python3 LED_Off.py');
        LED_On = false;
    }
    exec('"python3 LED_On.py"');
  })

// Does the routing for the server, makes sure that you always either go to the index or to a 404 page, and sends a status code whilst its at it
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
    res.statusCode = 200;
})

app.get('/winner', (req, res) => {
    res.sendFile('./public/Winner_Page.html', { root: __dirname });
    res.statusCode = 200;
})

app.get('/LED_Change', (req, res) => {
    res.redirect('/');
})

app.use((req, res) => {
    res.sendFile('./public/404_Page.html', { root: __dirname });
    res.statusCode = 404;
})
