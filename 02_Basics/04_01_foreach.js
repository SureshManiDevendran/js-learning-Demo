const coding=["js","C#","React","Angular"]

// Foreach wont return values but filter will returns values 

// Foreach

// const result=coding.forEach( (item)=>{
//   console.log(item)
    // return item;
// });
// console.log(result);

// Filters , able to return value

// const final=coding.filter( (item)=>{
//     return item;
// });

// console.log(final);

const arrNum=[1,2,3,4,5,6,8,9,10];

// const finalValue=arrNum.filter( (num)=>num >=4);
// console.log(finalValue);

// const res=arrNum.filter( (num)=>{   // When you use curly braces then explicitly use return keyword else wont show value
//     return num>=4;
// });

// const res=arrNum.filter( (num)=>(num >=4));  //  When you use round bracket then ,it will return value without "return" keyword

// console.log(res);
//   const newNum=[];
//   arrNum.forEach((num)=>{
//        if(num>=4)
//        {
//          newNum.push(num);
//        }
//   })
//   console.log(newNum);


const books=[
    {title:'Book One',genre:'Fiction',published:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',published:1982,edition:2005},
    {title:'Book Three',genre:'Comedy',published:1983,edition:2006},
    {title:'Book Four',genre:'Science',published:1984,edition:2007},
    {title:'Book Five',genre:'History',published:1985,edition:2008},
    {title:'Book Six',genre:'History',published:1986,edition:2009}
];

// Applying Fiters

let userBooks=books.filter( (bk)=>bk.genre==="History");

// const userBooks=books.filter( (bk)=>{
//     return bk.genre==="History"
// })
userBooks=books.filter( (bk)=>{ return bk.published >1985 && bk.genre==="History"});
//console.log(userBooks);


// Map Function

// const result=arrNum.map( (num)=>{return num+10});
// console.log(result);

// Chaining

const output=arrNum.map( (num)=>num*10).map( (num)=>num +1);
console.log(output)