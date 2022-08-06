//1.  Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
//  var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
//  arr1.sort();
//   for (const elem of arr1) {
//     console.log(elem);
//   }


//2.  Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// let maxi=-100;
//  let mostfreqchar ;
//  for(let i =0; i < arr1.length;i++)
//  {
//      let count =0;
//      for (let j = 0; j < arr1.length; j++) 
//      {
//     if(i!=j && (arr1[i]==arr1[j]))
//     {
// count++;
//     }
//      }
//      if(maxi<count)
//      {
//         maxi=count;
//          mostfreqchar=arr1[i];
//      }

//  }
//   console.log(maxi);
//     console.log(mostfreqchar);


// 3.Write a JavaScript function to merge two arrays and removes all duplicates elements. Go to the editor

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

//  for mergeing we have concat method 
// like this ~ 
//   const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);

// and to handle dublicates we have sets in js like that
//  const mySet1 = new Set()

// mySet1.add(1)           // Set [ 1 ]
// mySet1.add(5)           // Set [ 1, 5 ]
// mySet1.add(5)           // Set [ 1, 5 ]



//lets solve the problem :)

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
 
const merge_array= array1.concat(array2);
 const removedublicateset=new Set();
  for (const elem of merge_array) {
    removedublicateset.add(elem);
    
  }
  
    for (const elem of removedublicateset) {
      console.log(elem);
    }