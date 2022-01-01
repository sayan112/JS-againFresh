// // how to clone array 

// // how to concatenate two arrays

// let array1 = ["item1", "item2"];
// // let array2 = ["item1", "item2"];


// //  slice+ concat tectique

// // let array2 = array1.slice(0).concat(["item3", "item4"]);
// //  concat tecnique 
// // let array2 = [].concat(array1,["item3", "item4"]);
// // new way 


// // spread operator
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
// console.log(array2)



//  looks like we have to discuss again :) 
//   come 

 let array = [ "sayan", " bisal "];
 let array2= array;
  console.log(array);
  console.log(array2);

//   spread operator 
  let array3 = [...array];
  console.log(array3);

//   slice 
 let array4=array.slice(0);
 console.log(array4);

//   concat 
let array5 = [].concat(array);
 console.log(array5);


 