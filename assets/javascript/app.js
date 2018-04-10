
// array of objects that hold the questions to be asked with answers
var fourQuestions = [

    // //Question 1
    {
        answer: 'The Nation of Islam',
        question: 'With what organization was Malcolm X affiliated during his rise to prominence?',
        options: ['Followers of Allah', 'The Nation of Islam', 'THe Muslim Brotherhood', 'The Islamic Freedom Disciples'],

    },

    //Question 2  
    {
        answer: 'assassinated',
        question: 'How did Malcolm X die',
        options: ['cancer', 'natural causes', 'car accident', 'assassinated'],

    },

    //Question 3
    {
        answer: 'Fidel Castro',
        question: 'What foreign leader was so impressed he requested a private meeting with him?',
        options: ['Pope John XXIII', 'Fidel Castro', 'Muammar Gaddafi', 'Nikita Khrushchev'],

    },

    //Question 4
    {
        answer: 'prison',
        question: 'Where was Malcolm X when he first became interested in Islam?',
        options: ['prison', 'Islamic Temple', 'working at a church', 'scout camp'],

    },

];

// variables for DOM 
var panel = $("#quiz-panel");
var picPanel = $("#popbox");
// count down variables
var numberCounter = 30;
var counter = 30;
// maintains question number
var questionCounter = 0;
//correct and incorrect count
var correct = 0;
var incorrect = 0;
// holds timer value
var timer;
//used to post picture when entering wrong answer
var wrong = "assets/images/wrong.gif";
var fist = "assets/images/blackfist.jpg";

// fucntion used for count down
function countdown() {
    counter--;
    $("#count-timer").text(counter);
    if (counter === 0) {
        console.log("OUT OF TIME");
        timeUp();
    }
}

picPanel.append("<img src='" + fist + "' />");
panel.append("<h2> This is Where the Question and Answer Keys will be Displayed </h2>");
panel.append("<h2> Click on the Start Button to your left to begin! </h2>");

// fucntion used to start question process
function startQuestion() {

    // select a random picture when selecting right answer and assigns it to a vaiable
    var picArray = ['assets/images/diedfor.jpg', 'assets/images/fool.jpg', 'assets/images/knife.jpg', 'assets/images/malcolmmugshot.jpg', 'assets/images/media.jpg', 'assets/images/peace.jpg', 'assets/images/respect.jpg', 'assets/images/weapon.jpg'];

    var randomPic2 = Math.floor(Math.random() * picArray.length);

    console.log("this is random randomPic2 out of the loop: " + picArray[randomPic2]);

    // made this a global variable to function out side of the scope
    right = picArray[randomPic2];

    console.log("this is random right out of the loop: " + right);

    // empty the picture div
    picPanel.empty();

    picPanel.append("<img src='" + fist + "' />");

    timer = setInterval(countdown, 1000);

    panel.html("<h2>" + fourQuestions[this.questionCounter].question + "</h2>");

    for (var i = 0; i < fourQuestions[this.questionCounter].options.length; i++) {
        panel.append("<button class='answer-button' id='button' data-name='" + fourQuestions[this.questionCounter].options[i]
            + "'>" + fourQuestions[this.questionCounter].options[i] + "</button>" + "<br>");
    }
}
// this function loads the next question

function nextQuestion() {
    counter = numberCounter;
    $("#count-timer").text(counter);
    questionCounter++;
    startQuestion();
}

// this function clears the timer and informs of the correct answer

function timeUp() {
    
    picPanel.empty();

    clearInterval(timer);

    $("#count-timer").html(counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + fourQuestions[this.questionCounter].answer);
    picPanel.append("<img src='" + wrong + "' />");

    if (questionCounter === fourQuestions.length - 1) {
        setTimeout(results, 3 * 1000);
        picPanel.empty();
    }
    else {
        setTimeout(nextQuestion, 3 * 1000);
        picPanel.empty();
    }
}

// funtion list the complete results and post to the page (DOM)
function results() {

    picPanel.empty();

    clearInterval(timer);

    panel.html("<h2>All done, heres how you did!</h2>");

    $("#count-timer").text(counter);

    panel.append("<h3>Correct Answers: " + correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (fourQuestions.length - (incorrect + correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
    picPanel.empty();
}

// this is the click function for the answer selection, the answer is stored in data-name element
// if answer is correct it calls the answerCorrect function if not it calls the answerIncorrect function
function clicked(e) {

    clearInterval(timer);
    if ($(e.target).attr("data-name") === fourQuestions[questionCounter].answer) {
        answeredCorrectly();
    }
    else {
        answeredIncorrectly();
    }
}

// this is the answerIncorrect function
function answeredIncorrectly() {

    picPanel.empty();

    incorrect++;

    clearInterval(timer);

    panel.html("<h2>Nope!</h2>");
    panel.append("<h3>The Correct Answer was: " + fourQuestions[questionCounter].answer + "</h3>");
    picPanel.append("<img src='" + wrong + "' />");

    if (questionCounter === fourQuestions.length - 1) {
        setTimeout(results, 3 * 1000);
    }
    else {
        setTimeout(nextQuestion, 3 * 1000);
    }
}

// this is the answerCorrect funtion
function answeredCorrectly() {

    clearInterval(timer);

    correct++;

    panel.html("<h2>Correct!</h2>");
    picPanel.append("<img src='" + right + "' />");

    if (questionCounter === fourQuestions.length - 1) {
        setTimeout(results, 3 * 1000);
    }
    else {
        setTimeout(nextQuestion, 3 * 1000);
    }
}

// this is the reset function
function reset() {
    questionCounter = 0;
    counter = numberCounter;
    correct = 0;
    incorrect = 0;
    picPanel.empty();
    startQuestion();
}

// these are the click on functions of the page
$(document).on("click", "#start-over", function () {
    reset();
});

$(document).on("click", ".answer-button", function (e) {
    clicked(e);
});

$(document).on("click", "#start-quiz", function () {
    startQuestion();
});

