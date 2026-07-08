// create if all numbers in our array are multiples of 10 or not.


// let nums = [10,20,40,5,60];

// let ans = nums.every((el)=>el%10==0);

// console.log(ans);


// create a function to find the min number in an array.

let nums =[12,45,67,34,25,89];

let min = nums.reduce((min,el) =>{
    if(min <el){
        return min;
    }else{
        return el;
    }
});

console.log(min);