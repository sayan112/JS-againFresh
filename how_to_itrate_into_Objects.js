const NewEmploy= {
    Name : " Sayan Maitra ",
     Age : "19",
      NameOfAllFamilyMembers:["Subhas Maitra", "Sumita Maitra"]
};
//  for (const key in NewEmploy) {
//      if (Object.hasOwnProperty.call(NewEmploy, key)) {
//          const element = NewEmploy[key];
//          console.log(element);
         
//      }
//  }
 
 for (const key in NewEmploy) {
     if (Object.hasOwnProperty.call(NewEmploy, key)) {
         const element = NewEmploy[key];
         console.log(`${key} : ${NewEmploy[key]}`);
         
     }
 }