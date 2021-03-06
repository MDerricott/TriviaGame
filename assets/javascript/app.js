var qone = {
    question: "Alexander Hamilton held the following public office:",
    options: {
        answer: "Secretary of Treasury",
        hint: "President",
        wrongOne: "Federal Reserve Chairman",
        wrongTwo: "Secretary of Interior",
    },
    funfact: "Hamilton was the nation's first Treasury Secretary, appointed by George Washington.",
    image: "<img src='assets/images/hamilton.jpg'/>"
};

var qtwo = {
    question: "Alexander Hamilton's portrait appears on the:",
    options: {
        answer: "$10 bill",
        hint: "$100 bill",
        wrongOne: "$50 bill",
        wrongTwo: "$20 bill"
    },
    funfact: "Hamilton has been on the $10 bill since 1928.",
    image: "<img src='assets/images/ten.jpeg'/>"
};

var qthree = {
    question: "A still-existing financial institution Hamilton helped found in 1784 was:",
    options: {
        answer: "The Bank of New York",
        hint: "The New York Cotton Exchange",
        wrongOne: "The New York Stock",
        wrongTwo: "U.S. Trust"
    },
    funfact: "The Bank of New York was one of the nation's first banks, and Hamilton's plan for it served as a model for many banks to come.",
    image: "<img src='assets/images/bank.jpg'/>",
};

var qfour = {
    question: "During the Revolution, Hamilton led the New York Provincial Artillery Company, which today exists as the First Battalion Fifth Field Artillery based in:",
    options: {
        answer: "Kansas",
        hint: "Massachusetts",
        wrongOne: "New York",
        wrongTwo: "Texas"
    },
    funfact: "The unit, known as 'Hamilton's Own,' is located at Fort Riley, Kansas",
    image: "<img src='assets/images/war.jpg'/>",
};

var qfive = {
    question: "Hamilton, one of the few founding fathers to be born abroad, was born in:",
    options: {
        answer: "Nevis",
        hint: "France",
        wrongOne: "Isle of Skye",
        wrongTwo: "Halifax"
    },
    funfact: "Nevis, the Caribbean island that in Hamilton's time was part of the British West Indies.",
    image: "<img src='assets/images/nevis.jpg'/>",
};

var qsix = {
    question: "Hamilton helped found the newspaper that became:",
    options: {
        answer: "The New York Post",
        hint: "The New York Sun",
        wrongOne: "The New York Times",
        wrongTwo: "The New York Herald Tribune"
    },
    funfact: "The New York Post, originally called the New-York Evening Post, started publication in 1801.",
    image: "<img src='assets/images/post.jpg'/>",
};

var qseven = {
    question: 'Hamilton was called "Bastard brat of a Scotch pedlar" by:',
    options: {
        answer: "John Adams",
        hint: "Thomas Jefferson",
        wrongOne: "Dolly Madison",
        wrongTwo: "Aaron Burr"
    },
    funfact: "Adams and Hamilton did not get along, and Adams referred unkindly to the Hamilton's illegitimate birth on several occasions.",
    image: "<img src='assets/images/adams.jpeg'/>",
};

var qeight = {
    question: "The famous Burr-Hamilton duel took place in:",
    options: {
        answer: "Weehawken, NJ",
        hint: "Albany, NY",
        wrongOne: "Pittsburgh, PA",
        wrongTwo: "Greenwich Village, NY, NY"
    },
    funfact: "Weehawken, New Jersey, is across the Hudson River from New York. After he was wounded by Burr, Hamilton was rowed to Greenwich Village, where he died the next day.",
    image: "<img src='assets/images/duel.jpg'/>",
};

var qnine = {
    question: "Alexander Hamilton, an ambitious young immigrant, married which daughter of a wealthy patriot family?:",
    options: {
        answer: "Elizabeth Schuyler",
        hint: "Nancy Randolph",
        wrongOne: "Peggy Shippen",
        wrongTwo: "Kitty Livingston"
    },
    funfact: "Elizabeth Schuyler came from an old Dutch landowning family in upstate New York. She outlived Hamilton by fifty years, and she spent those decades assiduously working to preserve his reputation and build his legacy.",
    image: "<img src='assets/images/eliza.jpg'/>",
};

var qten = {
    question: "In order to get his financial program through Congress in 1790, Alexander Hamilton made a deal to move the nation's capital from:",
    options: {
        answer: "NY to PA to Washington, DC",
        hint: "NY to Trenton to Philadelphia",
        wrongOne: "NY to Annapolis, MD",
        wrongTwo: "Philadelphia to Washington, DC"
    },
    funfact: "In exchange for moving the capital to a site on the Potomac, Southern lawmakers agreed to enact Hamilton's controversial plan for the Federal Government to assume debts individual states had incurred during the Revolutionary War. The deal was arranged by Hamilton and VA senator James Madison over a dinner hosted by Thomas Jefferson.",
    image: '<img src="assets/images/capitol.jpg"/>',
};

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function questionEnding() {
   
    emptyStageRestart();
    $(".stage").html(`
        <div class="answer-screen">
        <div class="test">${questionImage}</div>
        <h1> <strong> You answered incorrectly.</strong></h1>
        
        <p> The answer is <strong> ${gameAnswer} </strong><p>
        <p>${gameQuestion.funfact}</p>
        </div>
        `);
};

function emptyStageRestart() {
    stop();
    userClicked = true;
    resultsTimeOut();
    $(".stage").empty();    
    $(".timer").empty();
    hideAnswers();
    $(".hint-button").hide();

    number = 30;
    
}

function rightAnswer() {
    emptyStageRestart();
    $(".stage").html(`
        <div class="answer-screen">
        <div class="test">${questionImage}</div>
        <h1><strong> You answered correctly.</strong></h1>
        
        <p> The answer is <strong>${gameAnswer}</strong></p>
        <p>${gameQuestion.funfact}</p>
        </div>
        `);
    
};

function gameOverNow() {
    emptyStageRestart();
    correct;
    incorrect;
    unanswer = questions - correct - incorrect;
    $(".stage").html(`
    <div class="answer-screen">
    <div class="test"><img src='assets/images/hamilton.jpg'/></div>
    <h1><strong> The Game is Over. </strong> </h1>
   
    <h3>Thank you for playing!</h3>
    <p><strong>Correct:</strong> ${correct}</h5>
    <p><strong>Incorrect:</strong> ${incorrect} </p>
    <p> <Srong>Unanswered:</strong> ${unanswer}</p>
    </div>
    `);
    $(".questions-remaining").empty();
    $(".hint-button").remove();
    $(".two").empty();
    $(".one").empty();
    $(".three").empty();
    $(".four").empty();
    gameover = true;
    resetFunction();
    // var timeout = setTimeout(function () {
    //     resetFunction();
    // }, 1000 * 5);
};

function resetFunction() {
    if (gameover) {
        var resetButton = $("<div class='reset-button'>");
        resetButton.append("Reset the Game");
        // $(".hint-row").empty();
        $(".hint-row").append(resetButton);
        $(".reset-button").on("click", function () {
            resetButton.remove();
            gameover =false;
            gameArray = [qone, qtwo, qthree, qfour, qfive, qsix, qseven, qeight, qnine, qten];
            incorrect = 0;
            correct = 0;
            unanswer = 0;
            hintsLeft = 0;
            questionCount = 10;
            setupQuestion();
            clickFunction();
            hintButton();
            


        });
    };
};

function decrement() {
    if (!gameover) {
        number--;
        $(".timer").html("<h4> Time Remaining: " + number + "</h4>");
        if (number === 0) {
            emptyStageRestart();
            $(".stage").html(`
                <div class=" row answer-screen">
                <div class="test">${questionImage}</div>
                <h1> <strong>Time's Up!</strong></h1>
              
                <p> The answer is <strong> ${gameAnswer} </strong><p>
                <p>${gameQuestion.funfact}</p>
                </div>
                `);
        }
    }
    else {
        $(".timer").empty();
    }
};

function resultsTimeOut() {
    setTimeout(() => {
        setupQuestion();
    }, 1000 * 7);
}

function stop() {
    clearInterval(intervalId);
};

function assignNewGameQuestion() {
    if (!gameover) {
       
        
        questionIndex = Math.floor(Math.random() * gameArray.length);
        var assignment = gameArray[questionIndex];
        gameQuestion = assignment;
        gameArray.splice(questionIndex, 1);
        userClicked = false;
        gameAnswer = gameQuestion.options.answer;
        questionImage = gameQuestion.image;
    };
};

function setupQuestion() {
    if (!gameover && gameArray.length > 0) {
        run();
        assignNewGameQuestion();
        showAnswers();
        $(".hint-button").show();
        stage.text(gameQuestion.question);
        $("#hint").removeAttr("id");
        optionsBlockFour.removeAttr("value");
        optionsBlockOne.removeAttr("value");
        optionsBlockThree.removeAttr("value");
        optionsBlockTwo.removeAttr("value");
        questionCount --;
        $(".questions-remaining").html(`
        <h3> Questions remaining: ${questionCount}</h3>
        `);
        arrayOfOptions = [gameQuestion.options.answer, gameQuestion.options.hint, gameQuestion.options.wrongOne, gameQuestion.options.wrongTwo];
        arrayofLocations = [optionsBlockFour, optionsBlockOne, optionsBlockThree, optionsBlockTwo];
        for (var i = 0; i < arrayofLocations.length; i++) {
            var randomIndex = Math.floor(Math.random() * arrayOfOptions.length);
            var randomizedAnswerSelection;
            randomizedAnswerSelection = arrayOfOptions[randomIndex];
            arrayofLocations[i].text(randomizedAnswerSelection);
            if (randomizedAnswerSelection === gameAnswer) {
                $(arrayofLocations[i]).attr("value", "answer");
            }
            else if (randomizedAnswerSelection === gameQuestion.options.hint) {
                $(arrayofLocations[i]).attr("value", "hint");

            }
            arrayOfOptions.splice(randomIndex, 1);
        }
    }
    else if (gameArray.length === 0 && !gameover) {
        gameover = true;
        gameOverNow();
    }
};

function clickFunction() {
    $(optionsBlockOne).on("click", function () {
        if (!userClicked) {
            console.log("clicked 1");
            if (optionsBlockOne.attr("value") === "answer") {
                correct++;
                rightAnswer();
                userClicked = true;
            }
            else {
                incorrect++;
                questionEnding();
                userClicked = true;
            };
        };
    });
    $(optionsBlockThree).on("click", function () {
        if (!userClicked) {
            console.log("clicked 1");
            if (optionsBlockThree.attr("value") === "answer") {
                rightAnswer();
                correct++;
                userClicked = true;
            }
            else {
                questionEnding();
                incorrect++;
                userClicked = true;
            }
        };
    });

    $(optionsBlockTwo).on("click", function () {
        if (!userClicked) {
            console.log("clicked 1");
            if (optionsBlockTwo.attr("value") === "answer") {
                rightAnswer();
                correct++;
                userClicked = true;
            }
            else {
                questionEnding();
                incorrect++;
                userClicked = true;
            };
        }
    });

    $(optionsBlockFour).on("click", function () {
        if (!userClicked) {
            console.log("clicked 1");
            if (optionsBlockFour.attr("value") === "answer") {
                rightAnswer();
                correct++;
                userClicked = true;
            }
            else {
                questionEnding();
                incorrect++;
                userClicked = true;
            };
        }
    });
};

function hintButton() {
    var theHintButton = $("<div class='hint-button'>");

    theHintButton.text("Get a Hint");
    $(".hint-row").append(theHintButton);

    $(".hint-button").on("click", function () {
        if(!userClicked){
        if (optionsBlockOne.attr("value") === "hint") {
            optionsBlockOne.attr("id", "hint");
        }
        else if (optionsBlockTwo.attr("value") === "hint") {
            optionsBlockTwo.attr("id", "hint");
        }
        else if (optionsBlockThree.attr("value") === "hint") {
            optionsBlockThree.attr("id", "hint");
        }
        else if (optionsBlockFour.attr("value") === "hint") {
            optionsBlockFour.attr("id", "hint");
        }
    }
    });
};

var questionCount = 10;
var questions = 10;
var gameArray = [qone, qtwo, qthree, qfour, qfive, qsix, qseven, qeight, qnine, qten];
var arrayOfOptions;
var arrayofLocations;
var optionsBlockOne = $(".one");
var optionsBlockTwo = $(".two");
var optionsBlockThree = $(".three");
var optionsBlockFour = $(".four");
var stage = $(".stage");
var gameQuestion = {};
var gameAnswer;
var hintToBeCleared;
var number = 30;
var correct = 0;
var incorrect = 0;
var unanswer;
var intervalId;
var newSetup;
var questionIndex = "";
var correct = 0;
var incorrect = 0;
var gameover = false;
var userClicked = false;
var hintsLeft = 2;
var startButton = $("<div class='start-button'>");
var hintButtonPush = $("<div class ='hint-button'>");
startButton.text("Start The Game");
var answerSection = $("#answer-options");
var questionImage;
hideAnswers();

function hideAnswers(){
    optionsBlockFour.hide();
    optionsBlockOne.hide();
    optionsBlockThree.hide();
    optionsBlockTwo.hide();
}

function showAnswers(){
    optionsBlockFour.show();
    optionsBlockOne.show();
    optionsBlockThree.show();
    optionsBlockTwo.show();
}


$(".stage").append(startButton);

$(".start-button").on("click", function () {
    setupQuestion();
    clickFunction();
    hintButton();
    showAnswers();
    $(".questions-remaining").html(`
            <h3> Questions remaining: ${questionCount}</h3>
            `);
    audioElement.play();
});

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/images/goham.mp3");




