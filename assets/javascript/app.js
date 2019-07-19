//Starts when page is loaded
$(document).ready(function () {

    //Start Game
    $("#button").click(function () {
        mainGame.start();
    });
    //End Game
    $(document).on("click","#end", function(){
        mainGame.gameOver();
    });
    //restart game(NOT WORKING/IN PROGRESS)
    $(document).on("click","#reset", function(){
        // mainGame.reset();
        alert("In Progress, Refresh for now");
    });
    
    

    //Question Array
    var questions = [{
        question: "The Ford Mustang's emblem is a unicorn",
        answerList: ["True", "False"],
        answer: "False"
    }, {
        question: "The Tesla is an all electric vehicle",
        answerList: ["True", "False"],
        answer: "True"
    }, {
        question: "The Ford F-150 is americas #3 selling truck",
        answerList: ["True", "False"],
        answer: "False"
    }, {
        question: "FIAT is an ITALIAN car manufactere",
        answerList: ["True", "False"],
        answer: "True"
    }, {
        question: "Bugatti has the most expensive vehicle on the market",
        answerList: ["True", "False"],
        answer: "True"
    }, {
        question: "The batmobile was an actual vehicle that somebody purchased",
        answerList: ["True", "False"],
        answer: "True"
    }, {
        question: "Diesel is more environmentaly friendly then Electric",
        answerList: ["True", "False"],
        answer: "False"
    }];

    //Setting Variables
    var mainGame = {
        right: 0,
        wrong: 0,
        timer: 30,
        //Game over if time runs out
        timeCount: function () {
            mainGame.timer--;
            $("#timer").html(mainGame.timer)
            if (mainGame.timer <= 0) {
                mainGame.gameOver();
            }
        },
        //start game, show questions, start timer
        start: function () {

            count = setInterval(mainGame.timeCount, 1000);
            $("#contentContainer").prepend('<h3>Time Remaining: <span id ="timer">30</span> Seconds</h3>');
            $("#button").hide();
            $("#trueFalse").hide();
            for (var i = 0; i < questions.length; i++) {
                $("#contentContainer").append("<h4>" + questions[i].question + "</h4>");
                for (var j = 0; j < questions[i].answerList.length; j++) {
                    $("#contentContainer").append("<input type='radio' name='question-" + i + "'value= '" + questions[i].answerList[j] + "'>" + questions[i].answerList[j]);
                }
            }
            $("#contentContainer").append('<br><button id="end" class="btn btn-danger">Finish</button>')
        },
        //end game, count right and wrong answers
        gameOver: function(){
            $.each($('input[name="question-0"]:checked'), function(){
                if ($(this).val() == questions[0].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            $.each($('input[name="question-1"]:checked'), function(){
                if ($(this).val() == questions[1].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            $.each($('input[name="question-2"]:checked'), function(){
                if ($(this).val() == questions[2].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            $.each($('input[name="question-3"]:checked'), function(){
                if ($(this).val() == questions[3].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            $.each($('input[name="question-4"]:checked'), function(){
                if ($(this).val() == questions[4].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            $.each($('input[name="question-5"]:checked'), function(){
                if ($(this).val() == questions[5].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            $.each($('input[name="question-6"]:checked'), function(){
                if ($(this).val() == questions[6].answer) {
                    mainGame.right++;
                }
                else{
                    mainGame.wrong++;
                }
            });
            this.result();
        },
        //results
        result: function(){
            clearInterval(count);
            $("#contentContainer h3").remove();

            $("#contentContainer").html("<h3>Finished!</h3>");
            $("#contentContainer").append("<h4>Correct Answers: " + this.right + "</h4>");
            $("#contentContainer").append("<h4>Incorrect Answers: " + this.wrong + "</h4>");
            $("#contentContainer").append("<h4>Unanswered: " + (questions.length - (this.right + this.wrong)) + "</h4>");
            $("#contentContainer").append('<br><button id="reset" class="btn btn-primary">Play Again</button>')
        },
        //restart game

        //In Progress

        // reset: function(){
        //     mainGame.right = 0;
        //     mainGame.wrong = 0;
        //     mainGame.timer = 0;
        //     mainGame.start();
        // }
    };

});