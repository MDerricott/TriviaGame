var qone = {
    question: "what?",
    options: {
        answer: "Huh?",
        hint: "So?",
        wrongOne: "For what?",
        wrongTwo: "Duh?"
    }       
}

var qtwo = {
    question: "jack",
    options: {
        answer: "Huh?",
        hint: "So?",
        wrongOne: "For what?",
        wrongTwo: "Duh?"
    }       
}

var sample = {
    question: "What is trivia?",
    theAnswer: "Fun game?",
    options: [this.theAnswer, "Torture", "Tricks", "For Smart People"],
    setup: function () {
        $(".stage").text(sample.question);
        $("#1").text(sample.options[0]);
        $("#1").attr("id", "answer");
        $("#2").text(sample.options[1]);
        $("#2").attr("id", "wrong-one");
        $("#3").text(sample.options[2]);
        $("#3").attr("id", "wrong-hint");
        $("#4").text(sample.options[3]);
        $("#4").attr("id", "wrong-two");
    },
    winner: "<h2> That's right you got the correct answer</h2> ",
    loser: "<h2> That's wrong the answer is Fun Games </h2> ",

    timer: function () {
        console.log("s");
    },
    wrongAnswer: function () {
        $(".stage").html(sample.loser);
        $("#answer").text("");
        $("#wrong-hint").text("");
        $("#wrong-two").text("");
        $("#wrong-one").text("");
    },
    rightAnswer: function () {
        $(".stage").html(sample.winner);
        $("#answer").text("");
        $("#wrong-hint").text("");
        $("#wrong-two").text("");
        $("#wrong-one").text("");
    },
    results: function () {
        $("#answer").on("click", function () {
            sample.rightAnswer();
            clearInterval(intervalId);
            correct ++;
        });
        $("#wrong-two").on("click", function () {
            sample.wrongAnswer();
            clearInterval(intervalId);
            incorrect++;
        });
        $("#wrong-hint").on("click", function () {
            sample.wrongAnswer();
            clearInterval(intervalId);
            incorrect++
        });
        $("#wrong-one").on("click", function () {
            sample.wrongAnswer();
            clearInterval(intervalId);
            incorrect++
        });
    },
}
    var number = 30;
    var correct = 0;
    var incorrect = 0;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $(".timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $(".timer").html("<h2>Time's Up!</h2>");
        $("#answer").text("");
        $("#wrong-hint").text("");
        $("#wrong-two").text("");
        $("#wrong-one").text("");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();


    sample.answer;
    sample.setup();
    sample.results();
    