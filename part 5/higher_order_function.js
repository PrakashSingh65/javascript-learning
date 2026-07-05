// function multipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 2);



// highter order function(returns)




let odd = function (n){
    console.log (!(n%2==0));
}

let even = function(n){
    console.log(n%2==0);
}


function oddOrEvenFactorey(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }else{
        console.log("even");
    }
}


let request = "odd";
// let oddFunc = oddOrEvenFactorey(request);
// oddFunc(5);