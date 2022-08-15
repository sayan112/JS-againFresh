//map react ki majboori 
// const numbers = [1,2,3,4,5];
//  const number=(num)=>{
//     return num*num;
//  }

// const need = numbers.map(number); // map takes a call back , just see the call back file :)

// for (const iterator of need) {
//     console.log(iterator);
// }

 
// const numbers =[2,3,4,5,6];
// const mappedarray = numbers.map(function (num) {
//      return num*2;
    
// })

//  for (const iterator of mappedarray) {
//      console.log(iterator);
//  }



 // so lets look at some real life examples :)

 const numbers =
 [ {
    name:"sayan",
     roll :"22"
 }
 ,
 {
    name:"sayan1",
     roll :"209"
 }
,
 {
    name:"sayan2",
     roll :"2q2"
 }
,
 {
    name:"sayan3",
     roll :"892"
 }
,
 {
    name:"sayan4",
     roll :"122"
 }
 ,
{
    name:"sayan5",
     roll :"100"
 }
]

const storeallnames = numbers.map(function (number) {
    return number.name

    // so in this call back it returns all ur names into storeallnames array
    
})
 for (const iterator of storeallnames) {
    console.log(iterator) ;
 }