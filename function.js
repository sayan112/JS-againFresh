// we have to make a function to check wheather a num is even or or 
//  let num = 11 ; 
//   console.log(OddEven(num));
//  function OddEven ( num) {
//       if(num%2==0)
//       {
//            return true;
//       }
//       else{
//           return false;
//       }
//  }
 // we  have a target we have to find it 
  
  let array = [100,2,3,4];
   let target = 4 ; 

   function FindTheTarget (array,target) {
  for (const iterator of array) {
       if( iterator=== target)
       {
           
           return true;
       }
     
    
  }
  return false;
}
let need =  FindTheTarget(array,target) ? "we find it":"we cant";
console.log(need);




