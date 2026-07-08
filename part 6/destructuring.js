// let names = ["prakash","sandeep","nakul","tony"];

// let [winner,runnerup, ...other]=names;
// console.log(winner,runnerup,other);



// destructuring(object)


const student ={
    name: "prakash",
    age:23,
    class: 8,
    subject:["hindi","english","maths","scienmce"],
    username: "prakash@123",
    pasword:"abcd"
};


let username = student.username;
let password = student.password;

console.log(student,username,password );