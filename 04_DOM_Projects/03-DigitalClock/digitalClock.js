// Any one type you can use for accessing element
// const clock=document.getElementById('clock');
// console.log(clock);
const clock=document.querySelector('#clock');
//console.log(clock1);

// Creating object of data
let date=new Date();
//console.log(date.toLocaleTimeString());
setInterval(()=>{
    clock.innerHTML=date.toLocaleTimeString();
},1000);