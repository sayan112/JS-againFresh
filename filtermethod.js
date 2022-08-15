//filer method 
 const array =[1,2,3,4,4,5];

//  const iseven =(number)=>{

//     return number%2===0;

//  }
 //remember filter always return true or false
//   const evenarr= array.filter(iseven)
//   for (const iterator of evenarr) {
//     console.log(iterator);
    
//   }




  const evenNums = array.filter((number)=>{
 return   number%2===0

  })

    for (const iterator of evenNums) {
    console.log(iterator);
    
  }
  
