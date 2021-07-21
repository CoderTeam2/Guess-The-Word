var player1N = localStorage.getItem("player-1");
var player2N = localStorage.getItem("player-2");

document.getElementById("player_question").innerHTML = "Question Turn - " + player1N;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2N;

var score1 = 0;
var score2 = 0;

document.getElementById("player1N").innerHTML = player1N + " : ";
document.getElementById("player2N").innerHTML = player2N + " : ";

document.getElementById("player1S").innerHTML = " "+score1;
document.getElementById("player2S").innerHTML = " "+score2;

var questionTurn = player1N;
var answerTurn = player2N;

var word = "";

function send(){
    word = document.getElementById("w").value;
    word = word.toUpperCase();
    var char1 = word[1];

    var middle = Math.floor(word.length/2);
    var char2 = word[middle];

    var last = word.length - 2;
    var char3 = word[last];

    let change1 = word.replace(char1, " _ ");
    let change2 = change1.replace(char2, " _ ");
    let change3 = change2.replace(char3, " _ ");

    var row = "<h3> Q. "+change3+"</h3>";
    var input = "<br>Answer : <input type='text' id='answer' placeholder='Answer Here'>";
    var button = "<br><button class='btn btn-info' onclick='check()'>Check</button>";
    var mainRow = row + input + button;
    document.getElementById("output").innerHTML = mainRow;
    document.getElementById("w").value = "";
}
function check(){
    var answer = document.getElementById("answer").value;
    answer = answer.toUpperCase();
    if(answer === word){
        if(answerTurn === player1N){
            score1++;
            document.getElementById("player1S").innerHTML = " "+score1;
        }else{
            score2++;
            document.getElementById("player2S").innerHTML = " "+score2;
        }
    }
    if(answerTurn === player1N){
        answerTurn = player2N;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2N;
        questionTurn = player1N;
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1N;
    }else{
        answerTurn = player1N;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1N;
        questionTurn = player2N;
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2N;
    }
    document.getElementById("output").innerHTML = "";
}


