var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent = "Player 1 Wins🎉";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").textContent = "Player 2 Wins🥂";
}
else{
    document.querySelector(".container h1").textContent = "Oops!! It's a draw";
}