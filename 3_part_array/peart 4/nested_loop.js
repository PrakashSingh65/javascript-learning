// for(let i=1; i<=3; i++){
//     console.log('outer loop $(i)');
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


let heroes = [ ["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

for(let i=0; i<heroes.length; i++){
    console.log('list #${i}');
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

