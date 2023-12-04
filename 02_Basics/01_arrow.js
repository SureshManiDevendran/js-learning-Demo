const testobj={
    username:"Vetri",
    userPrint:function(){
        console.log(`Hello${this.username} how r u ?`)
        console.log(this)
    }
}
//console.log(this.username)  // output Undefined
//console.log(this.userPrint) // output Undefined
//.log(testobj.username) // output vetri
//  testobj.userPrint()     // HelloVetri how r u ?
//  testobj.username="Sam"  // sam
//  testobj.userPrint()    // HelloSam how r u ?
//  console.log(this)

// function india()
// {
//     let username="Suresh"
//     console.log(this.username)  //undefined
// }
// india()

// const team=function(){
//     let username="Suresh"
//     console.log(this.username)  //undefined
// }
// team()

// Arrow Function


// const chai=()=>{
//     let user="suresh"
//     //console.log(this) // {}
//     console.log(this.user) // undefined

// }
// chai()


// const addTwo=(num1,num2)=>{
//    // console.log(num1+num2)
//    return num1+num2
// }

// var result= addTwo(2,3)
// console.log(result)

// implicit return

// const addTwo=(num1,num2)=>{        // explicit return
//    // console.log(num1+num2)
//    return num1+num2
// }   
//const addTwo=(num1,num2)=> num1+num2   // implicit return

// const addTwo=(num1,num2)=> (num1+num2) // implicit return
// console.log(addTwo(2,3))

const teamUserObj=()=>({username:"Vetri"})
console.log(teamUserObj())