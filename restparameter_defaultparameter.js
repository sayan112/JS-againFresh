// addallnumbers 
//  we have to add all numbers passing by the function 


// rest param
const addallnumbers=(...numbers)=> {
    let count =0;

    for (const iterator of numbers) {
        count+=iterator;
    }
     return count;

} 

// console.log(addallnumbers(1, 2, 3, 4, 5, 6));

//default param 

// purana technique 

// to haldle undefined thing
// const need = (a, b) => {
//      if(b===undefined)
//      {
//         b=1;
//      }
//   console.log(`a= ${a} and b= ${b}`);
// };

// need(12);



//new technique with default param

const need =(a,b=0)=> {

     console.log(`a= ${a} and b= ${b}`);
}

 need(12);