const form=document.querySelector('form');
console.log(form);
// this usecase give you empty value take value from inside form event,then will get control value
// const height= parseInt(document.querySelector('#height').value);
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('1');
   const height= parseInt(document.querySelector('#height').value);
   console.log(height)
   const weight= parseInt(document.querySelector('#weight').value);
   const results=document.querySelector('#results');
   
     if(height==='' || height<0 || isNaN(height))
     {
        //console.log('2')
        results.innerHTML="Please Enter a Valid Height";
     }

     if(weight==='' || weight<0 || isNaN(weight))
     {
        //console.log('2')
        results.innerHTML="Please Enter a Valid weight";
     }

});