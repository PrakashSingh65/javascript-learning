// Qs. For the given start state of an array,change it to final form using methods.
// start : ['january','july','march','august']
// final:['july','june','march','august']

let months =["january","july","march","august"]
// months.shift();
// months.splice(1,0,'june');
// console.log(months);
months.splice(0,2,'july','june');
console.log(months);