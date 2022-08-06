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
 // we  have a target we have to find elem 

//   let array = [100,2,3,4];
//    let target = 4 ; 

//    function FindTheTarget (array,target) {
//   for (const iterator of array) {
//        if( iterator=== target)
//        {

//            return true;
//        }


//   }
//   return false;
// }

// let need =  FindTheTarget(array,target) ? "we find elem":"we cant";
// console.log(need);

// declare fat arrow 

// let array = [ 1,2 ,3 ,4 ];
// const needarray =[];
// // using fat arrow 
//  const Findodd = (array)=>{
//      for (const iterator of array) {
//        if(iterator%2==0)
//        {
//           needarray.push(iterator);
//        }
//      }
//  }


  // function Findodd(array) {

  //    for (const iterator of array) {
  //      if(iterator%2==0)
  //      {
  //         needarray.push(iterator);
  //      }
  //    }

  // }

   // Findodd(array);
   // for (const iterator of needarray) {
   //    console.log( iterator);
   // }




   //  we have to find 5 if it is present in the array then return true;

    const array = [ 2, 8,4,5];
      for(const elem of array)
      {
    console.log(elem);
      }

   const findingNum = 8;

    function isnumexist(findingNum) {

      for(const elem of array)
      {
    if(elem== findingNum)
    {
        return true;
    }

      }
       return false;


    }

   console.log( isnumexist(findingNum)  );
