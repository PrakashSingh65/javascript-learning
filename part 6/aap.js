let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function(){
    //       console.log("you entered a button");
    // };
    //   console.dir(btn);



    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
      btn.addEventListener("dblclick",function(){
        console.log("you double clicked me");
      })
  
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
