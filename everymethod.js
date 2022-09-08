//is every elem is even or not we have to check 
// const arr = [ 12,4,2,6]
//  const check = arr.every((arr)=>arr%2===0)
//  console.log(check);


 const product = [
    {
        price:1000,
        name:"green-tshirt"
    }
    ,
     {
        price:2000,
        name:"red-tshirt"
    }
    ,
     {
        price:3000,
        name:"blue-tshirt"
    }
    ,
     {
        price:4000,
        name:"hot-tshirt"
    }

 ]

 //5000 se upar agar sare elem ho tabhi hi only it will return true 
 const cartarr=product.every((elem)=>elem.price<5000)
  console.log(cartarr);
 