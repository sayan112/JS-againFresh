// const arr=["catmice","dog","mice"]
// const find3digitword=arr.find((elem)=>elem.length===3)
// // with find method we can find only the first elem that satify its condition 
// console.log(find3digitword);


const user =[
    {
        userId:1,
        username:"sayan"
    }
    ,
       {
        userId:1,
        username:"sayan"
    }
    ,
       {
        userId:3,
        username:"souvik"
    }
    ,
       {
        userId:1,
        username:"sayan"
    }
    ,
       {
        userId:1,
        username:"sayan"
    }

]


//  we have to find the userid 3 :)
 const finduser3 = user.find((elem)=>elem.userId===3)
 console.log(finduser3);

 