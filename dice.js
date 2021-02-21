var dice1 =(Math.floor(Math.random()*6))+1;
var dice2 =(Math.floor(Math.random()*6))+1;

var image1="dice"+dice1+".png";
var image2="dice"+dice2+".png";

document.querySelector(".dice1_img").setAttribute("src",image1);
document.querySelector(".dice2_img").setAttribute("src",image2);

if(dice1>dice2){
    document.querySelector("h1").innerHTML=" player1 Wins!";
  }
else if(dice1<dice2){
    document.querySelector("h1").innerHTML="player 2 Wins!";
  }
else{
    document.querySelector("h1").innerHTML="Draw!";
  }
