// we have to write a function that return out sum of all parameters

 function sumall(...a) {
    let sum =0
     for (const iterator of a) {
        sum+= iterator;
   

         
     } 
     console.log(sum);
 }

 sumall(1,2,3,4,4,5);