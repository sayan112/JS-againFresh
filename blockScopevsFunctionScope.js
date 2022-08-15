function myapp() {

    if(1) {;
// let and c;oonst is block scope 
// but var is everywhere
 // function scope
//    var op = 10;
        let op=10;
        console.log(op);
    }
    console.log(op);

}


myapp();