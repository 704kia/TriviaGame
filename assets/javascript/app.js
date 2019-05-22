
//timer

var timer = 60


//correct, incorrect, unanswered variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;


$(document).ready(function(){

    //hide questions and end container so only start screen shows
    $("#questions-container").hide();
    $("#end-container").hide();
 
    //make click button that hides start and shows questions div
    $("#start-button").on('click', function(){
        
        $("#start-container").hide();
        $("#questions-container").show();

        function decrement() {
            timer--;
            $("#timer-number").html("<h2>" + timer + "</h2>");
        }
    })

    //make click button that shows end div and hides questions div
    $("#end-button").on("click", function(){

        $("#questions-container").hide();
        $("#end-container").show();
    })

    //give questions variables and check values

    var q1 = $("input[name='q1']:checked").val()
    var q2 = $("input[name='q2']:checked").val()
    var q3 = $("input[name='q3']:checked").val()
    var q4 = $("input[name='q4']:checked").val()
    var q5 = $("input[name='q5']:checked").val()

    //answer check

    if (q1 === 800){
        correct++;
    }
    else if (q1 === undefined) {
        unanswered++;
    } 
    else {
        incorrect++
    }


    if (q2 === "Saturn and Jupiter"){
        correct++;
    }
    else if (q2 === undefined) {
        unanswered++;
    } 
    else {
        incorrect++
    }


    if (q3 === undefined){
        unanswered++;
    }
    else if (q3 === "Jupiter") {
        correct++;
    } 
    else {
        incorrect++
    }


    if (q4 === "Star Sailor"){
        correct++;
    }
    else if (q4 === undefined) {
        unanswered++;
    } 
    else {
        incorrect++
    }


    if (q5 === "99%"){
        correct++;
    }
    else if (q5 === undefined) {
        unanswered++;
    } 
    else {
        incorrect++
    }


// display score
$("#correct").html(correct);
$("#incorrect").html(incorrect);
$("#unanswered").html(unanswered);








})


