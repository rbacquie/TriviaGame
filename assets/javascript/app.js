
// var fiveQuestions = [

    // //Question 1
    // {
    //     'answer': 'b',
    //     'question': 'With what organization was Malcolm X affiliated during his rise to prominence?',
    //     'options': ['Followers of Allah', 'The Nation of Islam', 'THe Muslim Brotherhood', 'The Islamic Freedom Disciples']

    // },

    // //Question 2  
    // {
    //     'answer': 'd',
    //     'question': 'How did Malcolm X die',
    //     'options': ['cancer', 'natural causes', 'car accident', 'assassinated']

    // },

    // //Question 3
    // {
    //     'answer': 'b',
    //     'question': 'What foreign leader was so impressed he requested a private meeting with him?',
    //     'options': ['Pope John XXIII', 'Fidel Castro', 'Muammar Gaddafi', 'Nikita Khrushchev']

    // },

    // //Question 4
    // {
    //     "answer": 'a',
    //     'question': 'Where was Malcolm X when he first became interested in Islam?',
    //     'options': ['prison', 'Islamic Temple', 'working at a church', 'scout camp']

    // },

    // //Question 5
    // {
    //     'answer': 'b',
    //     'question': 'How did Malcolm X die?',
    //     'options': ['cancer', 'assassinated', 'natural causes', 'car accident']

    // }];


$(document).ready(function () {   
    
    var questionCounter = 0;
    var time = 00;

    var intervalId;
    var clockRunning = false;

    function reset() {

         time = 00;
        $("#display").append(time);
    
      }



    $("#finish-quiz").on("click", reset);

    $("#start-quiz").on("click", function () {

        function start() {

            if (!clockRunning) {
              intervalId = setInterval(count, 1000);
              clockRunning = true;
            }
        }

        function clock() {
            time++;

            $("#timer").append(time);
            if (time === 59) {
                $("#timer").append("Your Times UP!");
                reset();
            };
        };
            // for (var i = 0; i = fiveQuestions.length; i++) {

            //     var questionLine = $("<p>");
            // }

        
    });
});