// A callback is a function passed as an argument to another function.
  

   const myfunc2 = () => {
     console.log("hey apun in myfunc2");
   };

const  myfunc=(callback)=>{   // passed right here as a func
    console.log("hey there ");
     callback();
  }
  


   myfunc(myfunc2); 