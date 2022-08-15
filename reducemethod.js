// const array=[1,2,3,4,5]
// //aim sum of all number 
// const sum = array.reduce((accumulator , cuurensum)=>{
//     return accumulator+cuurensum;
// })

// console.log(sum);


// lets see how it works 

// accumulator   cuurensum;
// 1               2 
// 3               3 
// 6               4 
// 10              5
// 15 
// return 15 

// lets see some reallife example :)

const flipkartsayanmaitracart=[
    {productId:1,
    price:1000},

    {productId:2,
    price:1000},

    {productId:3,
    price:1000},

    {productId:4,
    price:1000},

    {productId:5,
    price:1000},

    {productId:6,
    price:1000},
    {productId:7,
    price:1000},

    {productId:8,
    price:1000},
    {productId:9,
    price:1000},

    {productId:10,
    price:1000}

]

const delivaryCharge=100;
const price = flipkartsayanmaitracart.reduce((accumulator,currentPrice)=>{
return accumulator+currentPrice.price;

},delivaryCharge)

console.log(price);

//this is how flipkart internal Js works :)