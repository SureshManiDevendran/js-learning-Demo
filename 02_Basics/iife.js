// IIFE (Immediately Invoked Function Expressions)

// Syntax: IIFEs follow a particular syntax as shown below.

// (function (){ 
// // Function Logic Here. 
// })();

(function dbCon()   // Named IIFE
{
    console.log(`DB Connected`)
})();

(()=>{
    console.log(`DB Connected Two`)
})();

((num)=>{
    console.log(`${num}`)
})('Suresh');