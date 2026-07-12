// let p  = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("parah was clicked");
// });


// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// });


let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});