const coding=["js","C#","React","Angular"]

// coding.forEach(function(item){  // Normal Function
//     console.log(item)
// })

// coding.forEach((item)=>{  // Arrow Function
//     console.log(item)
// })

// coding.forEach(printMe)
// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach( (item,index,arr)=>{
//  // console.log(`${item}-${index}-${arr}`)
//   console.log(item,index,arr)
// })

const codingLanguage=[{
    languageName:"Javascript",
    extension:".js"
},
{
    languageName:"C#",
    extension:".cs"
},
{
    languageName:"HTML",
    extension:".html"
}
]

codingLanguage.forEach( (item)=>{
   console.log(item.languageName)
} )