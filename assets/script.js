// var question ="";
var timeStart = document.querySelector("#timer");
var timeamount = 60;
var txt="";
var q31 = ["Inside which HTML element do we put the JavaScript?","script","js","javascript","scripting"];
var q32 = ["JavaScript Data Type?","Undefined","Number","Boolean","Float"];
var q33 = ["Which of the following can't be done with client-side JavaScript","Validating a form","Sending Email","Storing a form","None"];
var q34 = ["Which of the fo34llowing is not JavaScript Data Type?","Undefined","Number","Boolean","Float"];
var q35 = ["Which of the following are capabilities of functions in JavaScript?","Return a value","Accept parameters and Return a value","Accept parameters"];
var q36 = ["Which of the following attribute can hold the JavaScript version?","LANGUAGE","SCRIPT","VERSION","None of the above"];
var q37 = ["Which of the following is not a valid JavaScript variable name?","2names","_first_and_last_names","FirstAndLast"];
var q38 = ["Wh of following not JavaScript Data Type?","Undefined","Number","Boolean","Float"];
var q39 = ["Whh of folowing not 39Type?","Undefined","Number","Boolean","Float"];
var q40 = ["Which of following 40not  Type?","Undefeeined","Number","Boolean","Float"]
let quiz = [q31,q32,q33,q34,q35,q36,q37,q38,q39,q40];
let q1 ="";
let quizT=[];
document.getElementById('startx').addEventListener('click', function(){
    // setTime();
    hideShow();
    gameStart();
}) 

///start button will reveal the questions, also hide/show for questions and start.
function hideShow() {
    var x=document.getElementById('quest');{
     if (x.style.display === "flex") {
         x.style.display = "none"
     }
     else x.style.display = "flex"
    };

    var x=document.getElementById("startx");{
        if (x.style.display === "none") {
            x.style.display = "flex"

        }
        else x.style.display = "none"
       };}

       


function hideShow() {
    var x=document.getElementById('quest');{
     if (x.style.display === "flex") {
         x.style.display = "none"
     }
     else x.style.display = "flex"
};

 var x=document.getElementById("startx");{
     if (x.style.display === "none") {
    x.style.display = "flex"
    }
     else x.style.display = "none"
       }
 ;}

 //Once timer has started it will cycle through all the questions. 
function gameStart() {
        var timerInterval = setInterval(function() {
        timeamount--;
        timeStart.textContent = 'Time:' + timeamount;

        if(timeamount == 0) {
            // Stops execution of acti
            setInterval(60);
        }
    },1000);
    //questions replace the HTML buttons 
        setTimeout(() => {
            quizT=[q1,k1,k2,k3,k4]=q31;
            document.getElementById("a1").innerHTML= k1;
            document.getElementById("a2").innerHTML= k2;
            document.getElementById("a3").innerHTML= k3;
            document.getElementById("a4").innerHTML= k4;
            document.getElementById("highlight").innerHTML= q1;

             quizT=[q1,k1,k2,k3,k4]=q32;
             document.getElementById("a1").innerHTML= k1;
             document.getElementById("a2").innerHTML= k2;
             document.getElementById("a3").innerHTML= k3;
             document.getElementById("a4").innerHTML= k4;
             document.getElementById("highlight").innerHTML= q1;      
        },60000)
   
             quizT=[q1,k1,k2,k3,k4]=q33;
             document.getElementById("a1").innerHTML= k1;
             document.getElementById("a2").innerHTML= k2;
             document.getElementById("a3").innerHTML= k3;
             document.getElementById("a4").innerHTML= k4;
             document.getElementById("highlight").innerHTML= q1;
       

             quizT=[q1,k1,k2,k3,k4]=q34;
             document.getElementById("a1").innerHTML= k1;
             document.getElementById("a2").innerHTML= k2;
             document.getElementById("a3").innerHTML= k3;
             document.getElementById("a4").innerHTML= k4;
             document.getElementById("highlight").innerHTML= q1;

             quizT=[q1,k1,k2,k3,k4]=q35;
             document.getElementById("a1").innerHTML= k1;
             document.getElementById("a2").innerHTML= k2;
             document.getElementById("a3").innerHTML= k3;
             document.getElementById("a4").innerHTML= k4;
             document.getElementById("highlight").innerHTML= q1;
   
    } 
