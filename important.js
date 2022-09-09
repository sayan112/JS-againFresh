// lets see some amazing things 
//  console.log(0=='');
//   console.log(3===3);
//    console.log(3==3);
//      console.log(3=='3');// checks only value not data type 

const { forwardRef } = require("react");

//      Truthy values
// All numbers(positive and negative) are truthy except zero

// All strings are truthy except an empty string ('')

// The boolean true

// Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string
// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56



// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// let reqage = prompt("enter the year");
// let age = now.getFullYear();
// let newo = age - reqage;
// console.log(newo > 18 ? "ok man" : "under age");
 
// const arr=[1,2,3,4]
//  console.log(arr);
//   const need = [
//     {
//         ko:"nweknffwnf",
//         kjwefelbw:1
//     }
//     ,
//     1,
//     true
//   ]
//    console.log(need);

//    const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]
// Converting array to string
// toString:Converts array to string

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ages.sort();
// console.log(ages);
//  console.log(ages[0]);
//   console.log(ages[ages.length-1]);
//    let sum =0;
//    for (const elem of ages) {
// sum+=elem;
//    }
//    console.log(sum / ages.length);  


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let even=0;
// let odd=0;
// for (let i = 0; i <=100; i++) {
//    const element =i;
//     if(element%2==0)
// { 
//     even += element;

// }else{
//    odd+=element;
// }
  
   
// }
//  console.log(even);
//   console.log(odd);


// console.log(numbers.includes(5)) // true

// let country = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA",
// ];

//  for (const elem of country) {
//    if(elem.iOf('LAND')!=-1)
//    {
//       console.log(elem);
//    }
   
//  }



//   const fullStack = [
//     ["HTML", "CSS", "JS", "React"],
//     ["Node", "Express", "MongoDB"],
//   ];

//    for (let i = 0; i < fullStack.length; i++) {
//      const element = fullStack[i];
//      for (const elem of element) {
//        console.log(elem+"\n"); 
//      }
    
//    }



   const countries = [
     "Afghanistan",
     "Albania",
     "Algeria",
     "Andorra",
     "Angola",
     "Antigua and Barbuda",
     "Argentina",
     "Armenia",
     "Australia",
     "Austria",
     "Azerbaijan",
     "Bahamas",
     "Bahrain",
     "Bangladesh",
     "Barbados",
     "Belarus",
     "Belgium",
     "Belize",
     "Benin",
     "Bhutan",
     "Bolivia",
     "Bosnia and Herzegovina",
     "Botswana",
     "Brazil",
     "Brunei",
     "Bulgaria",
     "Burkina Faso",
     "Burundi",
     "Cambodia",
     "Cameroon",
     "Canada",
     "Cape Verde",
     "Central African Republic",
     "Chad",
     "Chile",
     "China",
     "Colombi",
     "Comoros",
     "Congo (Brazzaville)",
     "Congo",
     "Costa Rica",
     "Cote d'Ivoire",
     "Croatia",
     "Cuba",
     "Cyprus",
     "Czech Republic",
     "Denmark",
     "Djibouti",
     "Dominica",
     "Dominican Republic",
     "East Timor (Timor Timur)",
     "Ecuador",
     "Egypt",
     "El Salvador",
     "Equatorial Guinea",
     "Eritrea",
     "Estonia",
     "Ethiopia",
     "Fiji",
     "Finland",
     "France",
     "Gabon",
     "Gambia, The",
     "Georgia",
     "Germany",
     "Ghana",
     "Greece",
     "Grenada",
     "Guatemala",
     "Guinea",
     "Guinea-Bissau",
     "Guyana",
     "Haiti",
     "Honduras",
     "Hungary",
     "Iceland",
     "India",
     "Indonesia",
     "Iran",
     "Iraq",
     "Ireland",
     "Israel",
     "Italy",
     "Jamaica",
     "Japan",
     "Jordan",
     "Kazakhstan",
     "Kenya",
     "Kiribati",
     "Korea, North",
     "Korea, South",
     "Kuwait",
     "Kyrgyzstan",
     "Laos",
     "Latvia",
     "Lebanon",
     "Lesotho",
     "Liberia",
     "Libya",
     "Liechtenstein",
     "Lithuania",
     "Luxembourg",
     "Macedonia",
     "Madagascar",
     "Malawi",
     "Malaysia",
     "Maldives",
     "Mali",
     "Malta",
     "Marshall Islands",
     "Mauritania",
     "Mauritius",
     "Mexico",
     "Micronesia",
     "Moldova",
     "Monaco",
     "Mongolia",
     "Morocco",
     "Mozambique",
     "Myanmar",
     "Namibia",
     "Nauru",
     "Nepal",
     "Netherlands",
     "New Zealand",
     "Nicaragua",
     "Niger",
     "Nigeria",
     "Norway",
     "Oman",
     "Pakistan",
     "Palau",
     "Panama",
     "Papua New Guinea",
     "Paraguay",
     "Peru",
     "Philippines",
     "Poland",
     "Portugal",
     "Qatar",
     "Romania",
     "Russia",
     "Rwanda",
     "Saint Kitts and Nevis",
     "Saint Lucia",
     "Saint Vincent",
     "Samoa",
     "San Marino",
     "Sao Tome and Principe",
     "Saudi Arabia",
     "Senegal",
     "Serbia and Montenegro",
     "Seychelles",
     "Sierra Leone",
     "Singapore",
     "Slovakia",
     "Slovenia",
     "Solomon Islands",
     "Somalia",
     "South Africa",
     "Spain",
     "Sri Lanka",
     "Sudan",
     "Suriname",
     "Swaziland",
     "Sweden",
     "Switzerland",
     "Syria",
     "Taiwan",
     "Tajikistan",
     "Tanzania",
     "Thailand",
     "Togo",
     "Tonga",
     "Trinidad and Tobago",
     "Tunisia",
     "Turkey",
     "Turkmenistan",
     "Tuvalu",
     "Uganda",
     "Ukraine",
     "United Arab Emirates",
     "United Kingdom",
     "United States",
     "Uruguay",
     "Uzbekistan",
     "Vanuatu",
     "Vatican City",
     "Venezuela",
     "Vietnam",
     "Yemen",
     "Zambia",
     "Zimbabwe",
   ];



   // toUpperCase();

//   for (let i = 0; i < countries.length; i++) {
//   countries[i]= countries[i].toUpperCase();

   
//   }
//      console.log("\n");

//    countries.sort();
//     for (const elem of countries) {
//       console.log(elem);
//     }
     




// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

// ages.sort();
//  for (const elem of ages) {
//     console.log(elem);
   
//  }
//  console.log(ages[0]);

//   console.log(ages[ages.length-1]);

//    let range = ages[ages.length-1]-ages[0];
//     console.log(range);


// slice 10 countries fron countries Array






// const newarr = [ 1,2,3,4,5,6];
//  console.log(newarr.length);
//  newarr.splice(3,3,7,8);
//   console.log(newarr);
//    console.log(newarr.length);

// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = [];
 shoppingCart.push("Milk");
  shoppingCart.push("Coffee");
   shoppingCart.push("Tea");
    shoppingCart.push("Honey");

//      for (const elem of shoppingCart) {
//        console.log(elem);
//      }

//      if(shoppingCart.indexOf("Meat")==-1)
//      {
// shoppingCart.unshift("Meat");
// unshift means add 
    //  }
     
     
    //  for (const elem of shoppingCart) {
    //    console.log(elem);
    //  }


    //   console.log("\n");
     
    //  if (shoppingCart.indexOf("Sugar") == -1) {
    //    shoppingCart.push("sugar")
    //    // unshift means add
    //  }
    //     for (const elem of shoppingCart) {
    //       console.log(elem);
    //     }

      // i am alergic of honey 
       
//     const check =shoppingCart.indexOf("Honey");
//     shoppingCart.splice(check,1);
     
//      console.log("\n");
//         for (const elem of shoppingCart) {
//           console.log(elem);
//         }
// //slice first 3 from array
//      console.log("\n");

//  shoppingCart.splice(0,3);
//         for (const elem of shoppingCart) {
//           console.log(elem);
//         }



    // #
    // ##
    // ###
    // ####
    // #####
    // ######
    // #######




  
    // for (let i = 0; i <7 ; i++) {
    //   for (let j = 0; j < i+1; j++) {
    //     console.log("#");
    //   }
    //   console.log("\n");
      
    // }


    // Call your function sum, it takes any number of arguments and it returns the sum.


  //    const allsum = (...arr)=>
  //    {
  //     let sum=0;
  //     for (const iterator of arr) {
         
  //       sum+=iterator;      }
  //        return sum;
  //    }

  //  let si=  allsum(1,2,2,3,4);
  //     console.log(si);




    //  const sum=()=>{
    //  return   Math.floor( Math.random()*100);
    //  }
    //  console.log(sum()); 





//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

//  const arr =[];

//  const additem = (elem )=>{
   
//   arr.push(elem);

//    return arr;
//  }

//    const newarr=  additem(1);

//   for (const elem of newarr) {
//      console.log(elem);
    
//   }

    

 const reverseArray=(...arr)=>{
   
  reverseArray(arr);
   return arr;
 }



console.log(reverseArray([1, 2, 3, 4, 5]));
