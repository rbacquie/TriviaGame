
var fourQuestions = [

    // //Question 1
    {
        answer: 'b',
        question: 'With what organization was Malcolm X affiliated during his rise to prominence?',
        options: ['Followers of Allah', 'The Nation of Islam', 'THe Muslim Brotherhood', 'The Islamic Freedom Disciples']

    },

    //Question 2  
    {
        answer: 'd',
        question: 'How did Malcolm X die',
        options: ['cancer', 'natural causes', 'car accident', 'assassinated']

    },

    //Question 3
    {
        answer: 'b',
        question: 'What foreign leader was so impressed he requested a private meeting with him?',
        options: ['Pope John XXIII', 'Fidel Castro', 'Muammar Gaddafi', 'Nikita Khrushchev']

    },

    //Question 4
    {
        answer: 'a',
        question: 'Where was Malcolm X when he first became interested in Islam?',
        options: ['prison', 'Islamic Temple', 'working at a church', 'scout camp']

    },

];

// console.log("first answer" + fiveQuestions[0].answer);
// console.log("first answer" + fiveQuestions[1].answer);
// console.log("first answer" + fiveQuestions[2].answer);
// console.log("first answer" + fiveQuestions[3].answer);



var questionCounter = fourQuestions[0];

// console.log("first test " + questionCounter);

// for (var i = 0; i < fiveQuestions.length; i++) {

//      if (questionCounter !== -1) {
//         console.log("first question " + question[0]);
//         console.log("first options " + fourQuestions[0].options[i]);
//      } else {  
//         console.log("second question " + this.options[i]);
//         console.log("second options " + fourQuestions[1].options[i]);
//      }
// };
$(document).ready(function () {   
     
    // to count the questions
    // var questionCounter = 0;
    // to store the answers;
    var answers =[];
    // will you to check if question is answered
    var flag = false;
    // var time = 00;

    // var intervalId;
    // var clockRunning = false;

    function reset() {

        //  time = 00;
        // $("#display").append(time);
    
      }



    // $("#finish-quiz").on("click", reset);

    $("#start-quiz").on("click", function () {

        for (var i = 0; i < fourQuestions.length; i++) {

            //storing the element in the variable
            var qline = $("#question");
            // making a p tag with the question and question number
            var quest = $("<p>").text("#" + questionCounter + fourQuestions[i].question);
            //appending it to the DOM
            qline.append(quest);

        }
        // I couldn't get the timmer to work at all

        // function start() {

        //     if (!clockRunning) {
        //       intervalId = setInterval(count, 1000);
        //       clockRunning = true;
        //     }
        // }

        // function clock() {
        //     time++;

        //     $("#timer").append(time);
        //     if (time === 59) {
        //         $("#timer").append("Your Times UP!");
        //         reset();
        //     };
        // };
            // for (var i = 0; i = fiveQuestions.length; i++) {

            //     var questionLine = $("<p>");
            // }

        
    });
});