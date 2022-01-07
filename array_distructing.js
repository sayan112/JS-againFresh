// mostly use in now days 
//  es6 feature 
let array =["hi","op","mk"];
 
 for (const elem of array) {
      console.log(elem);
 }

  let need1= array[0];
   let need2 = array[1];
    console.log(`two elems  are ${need1} , ${need2} ` );

    //  this is array destructuring 
     let [need3,need4] = array;
 console.log(`another way of writing ${need3}, ${need4}`);


// again same 


 let need = [ 1,2,3,5,6] ; 
 
 for (const iterator of  need) {
      console.log(iterator ); 
 }
  let [sex1,sex2]= need;
  
   console.log(sex1);
   console.log(sex2);