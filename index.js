var readlineSync = require('readline-sync');
var score=0;
var userName=readlineSync.question("Your Name: ");
console.log("Welcome "+userName +" to DO YOU KNOW ME?");

var questionOne= {
  q:"Where am I from? ",
  answer: "Patna"
}
var questionTwo= {
  q:"Where do I study? ",
  answer: "KIIT"
}
var questionThree= {
  q:"What is my fav colour? ",
  answer: "White"
}
var questionFour= {
  q:"What is my fav cuisine? ",
  answer: "Italian"
}
function play(question,answer)
{
  var userName= readlineSync.question(question);
  if(userName.toUpperCase()===answer.toUpperCase())
   {
     console.log("Right Answer");
     score++;
  }
  else
    console.log("Wrong Answer"); 
  console.log("Score:",score);
  console.log("------------------");
}
var array=[questionOne,questionTwo,questionThree,questionFour];
for(var i=0;i<4;i++)
{
  var currentQues=array[i];
  play(currentQues.q,array[i].answer);
}
console.log("YOUR TOTAL SCORE: ",score)