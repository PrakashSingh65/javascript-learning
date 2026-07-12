let btn =document.querySelector("button");


btn.addEventListener("click", function(){
    console.log("generate random color");
});


function getRandomColor(){
    let red = Math.floor(Math.random() * 225);
    let green = Math.floor(Math.random() *225);
    let blue = Math.floor(Math.random() *225);


    let color =`rgb(${red},${green}, ${blue})`;
    return color;
}