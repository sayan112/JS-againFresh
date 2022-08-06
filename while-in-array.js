// while loop in array 
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);



//  const mans = [ "SAYaN", "hifox", "lazy-bong"];
//   const newarr=[];
//   let i=0;
//    while (i<mans.length) {
//          newarr.push(mans[i].toLowerCase());
//          i++;
       
//    }
//     console.log(newarr);



    // lets declear a array = 
//      const arr= [1,2, "sayan",true];
//       let i =0;
//       while (i<arr.length) {
//             console.log(arr[i]);
//             i++;
//       }
      

// lets solve a problem with this 

 const alpha = [ "sayan" , "maitra"] ; 
  const bigalpha=[];
     var i=0;
   while(i<alpha.length)

   {
  const eachstring = alpha[i].toUpperCase();
  bigalpha.push(eachstring);
    i++;
   }


    for (let idx = 0; idx < bigalpha.length; idx++) {
      const element = bigalpha[idx];
       console.log(element);
      
    }

    //best method
    for (const elem of bigalpha) {
      console.log(elem);
    }


