// write an arrow function that return  the square of a number 'n'


// const square = (n) =>n*n;

// console.log(square(5));




// Qs2.  Write a function that print "hello world" 5 times at intervals of 2s each

let id = setInterval(() => {
    console.log("hello world");
},2000);


setTimeout(()=>{
    clearInterval(id);
},10000);