
var questA = false;
var questB = false;
var questC = false;
var questD = false;
var counter = 0;

$(document).ready(function () {
    $("#start-button").click(function () {



        var qt5 = [

            //Question 1
            {
                'answer': 'b',
                'question': 'With what organization was Malcolm X affiliated during his rise to prominence?',
                'options': ['Followers of Allah', 'The Nation of Islam', 'THe Muslim Brotherhood', 'The Islamic Freedom Disciples']

            },

            //Question 2  
            {
                'answer': 'd',
                'question': 'How did Malcolm X die',
                'options': ['cancer', 'natural causes', 'car accident', 'assassinated']

            },

            //Question 3
            {
                'answer': 'b',
                'question': 'What foreign leader was so impressed he requested a private meeting with him?',
                'options': ['Pope John XXIII', 'Fidel Castro', 'Muammar Gaddafi', 'Nikita Khrushchev']

            },

            //Question 4
            {
                'answer': 'a',
                'question': 'Where was Malcolm X when he first became interested in Islam?',
                'options': ['prison', 'Islamic Temple', 'working at a church', 'scout camp']

            },

            //Question 5
            {
                'answer': 'b',
                'question': 'How did Malcolm X die?',
                'options': ['cancer', 'assassinated', 'natural causes', 'car accident']

            }];

        for (var i = 0; i = qt5.length; i++) {

            $("#quest5").text(counter + qt5[i].question[i]);
        }


    });
});