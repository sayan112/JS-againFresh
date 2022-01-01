// break keywork

// continue keyword 

for(let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}


// output ->
// 1
// 2
// 3

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
    }
    console.log(i);
}
console.log("hello there");


// output ->

// hello there
// 1
// 2
// 3
// 5
// 6
// 7
// 8
// 9
// 10