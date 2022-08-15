//   const person = {
//     name : "sayan",
//     roll:21
//   }
//    const persondetailes = (obj)=>{
//  console.log(obj.name);
//  console.log(obj.roll);
//    }
//     persondetailes(person);


  const person = {
    name: "sayan",
    roll: 21,
  };
  // this is parameter destrucring used in react a lot 
  const persondetailes = ({name, roll}) => {
  console.log(name);
    console.log(roll);
  };
  persondetailes(person);
