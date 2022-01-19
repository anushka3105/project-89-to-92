player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1score=0;
player2score=0;
document.getElementById("plyer1_name").innerHTML="question turn"+player1_name;
document.getElementById("player1_score").innerHTML=player1score;
ocument.getElementById("plyer2_name").innerHTML="answer turn"+player2_name;
document.getElementById("player2_score").innerHTML=player2score;
function send(){ 
var number1=document.getElementById("number1").value;
var number2=document.getElementById("number2").value;
answer=parseInt(number1)*parseInt(number2);
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML=row
document.getElementById("word").value=""
}
qturn="player 1";
aturn="player 2";
function check(){
    getanswer=document.getElementById("input_check_box").value;

    if(answer == getanswer){
        if(aturn =="player1")
        {
            player1score=player1score+1;
            document.getElementById("plyer1_score").innerHTML=player1score;

        }
        else{player1score=player2score+1;
            document.getElementById("plyer2_score").innerHTML=player2score;
        }
    } 
    if(qturn == "player1"){
        qturn="player2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name
    }
    else{qturn="player1";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name}

    if(aturn == "player1"){
        aturn="player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name
    }
    else{aturn="player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name}
    document.getElementById("output").innerHTML="";
}
