// crating favorite movie

const fevMovie ="avatar";

let guess = peompt("guess my favorit movie");

while( (guess !=favMovie) && (guess != "quite")){
    guess = prompt("wrong guess. Please try again");
}


if(guess == favMovie){
    console.log("congrats");
}else{
    console.log("quit")
}