// // let names = ["prakash","sandeep","nakul","tony"];

// // let [winner,runnerup, ...other]=names;
// // console.log(winner,runnerup,other);



// // destructuring(object)


// const student ={
//     name: "prakash",
//     age:23,
//     class: 8,
//     subject:["hindi","english","maths","scienmce"],
//     username: "prakash@123", 
//     pasword:"abcd"
// };


// let username = student.username;
// let password = student.password;

// console.log(student,username,password );



// selecting elements by class name 


// let smallImages = document.getElementsByClassName("oldImag");

// for(let i =0; i< smallImages.length; i++){
//     smallImages[i].scr ="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is change.`);
// }



// query selectors


console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImage"));