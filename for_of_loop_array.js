// no need much in js , phir bhi likh hi leta hu  
//     let array = [ "jk", "lk", "hj"] ;
 
//     for (const elem of array) {
//          console.log(elem);
//     }




//  Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 
let mul =0;
 for(let i = 0 ; i<1000;i++)
 {
     if(i%3==0 || i%5==0)
     {
          mul+=i;
     }
 }
  console.log(mul);