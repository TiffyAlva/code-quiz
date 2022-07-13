// Declared variables
var highScore = document.querySelector("#highscore");
var clearScores = document.querySelector("#clear");
var returntoFrontPage = document.querySelector("#return");

// Event listener to go back to index page
returntoFrontPage.addEventListener("click", function () {
    window.location.replace("./index.html");
});


// load what you have in your localStorage
// using localStorage.getItem()
// 