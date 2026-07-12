let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onclick = sayName;
    // btn.onmouseenter = function(){
    //       console.log("you entered a button");
    // };
    //   console.dir(btn);
  
}
// btn.onclick = function (){
//     console.log("button was clicked");
// };




function sayHello(){
    alert("Hello!");
}

function sayName() {
    alert("prakash");
}
