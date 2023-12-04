// Syntax
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

const arrNum=[1,2,3];
const initialValue=0;
// const result=arrNum.reduce(function(acc,curr){
//     console.log(`acc:-${acc} and curr:- ${curr} and initial Value:-${initialValue}`)
//     return acc+curr;
// },initialValue);

// const result=arrNum.reduce( (acc,curr)=>acc+curr,0)

// console.log(result);

// Shopping Cart

const shoppingCart=[
{itemName:"Js Course",price:2999},
{itemName:"C# Course",price:3999},
{itemName:"Java Course",price:4999}]

const resultCart=shoppingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(resultCart);