let userscore= 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const message = document.querySelector(".msg")
const userPoints= document.querySelector(".user-para")
const compPoints = document.querySelector(".comp-para")
const reset= document.querySelector(".Reset")
const compChoice= () => {
const option = ["rock","paper","scissors"];
let index =Math.floor(3*Math.random());
let kms = option[index];
return kms;

}


const drawGame = () =>{
    console.log("the game was drawed");
    message.innerText =" The Game Was Drawed";
}
choices.forEach((choice ) => {
    console.log(choice);
    const mid = choice.getAttribute("id")
    choice.addEventListener("click",() => {
        console.log("choice was clicked",mid);
        playGame(mid);
    } );
});

const showWinner = (win , mid , comp) => {
    if(win==true)
        {
            console.log("you win")
           userscore++;
            userPoints.innerText=userscore
            message.innerText=`You Win ! ${mid} beats ${comp}`
        }
    else{
        console.log("you lose")
        compScore++;
        compPoints.innerText=compScore
        message.innerText=`You Lose ! ${mid} loses to ${comp}`
    }
}

const playGame = (mid) => {
console.log("user choice = ", mid);
const comp = compChoice();
console.log("comp choice = ",comp);

if(mid === comp)
{
    drawGame();
}
else{
let win= true;
 if(mid === "paper" ){   
    win = (comp === "rock"? true : false); 
}
else if(mid === "rock"){
    win = (comp === "scissors"?true: false);
}
else
{
    win= (comp === "paper" ? true : false);
}
showWinner(win , mid , comp);
}}

reset.addEventListener("click",() => {
message.innerText="Play your Move"
userscore=0;
userPoints.innerText=userscore;
compScore=0;
compPoints.innerText=compScore;
})