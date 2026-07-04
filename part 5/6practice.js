// create a function that return the concatenation of all strings in an aray.


let str = ["hi","hello","how","bye","!"];

function concat(str){
    let result;

    for(let i=0; i<str.length; i++){
        result+=str[i];
    }
    return result;
}