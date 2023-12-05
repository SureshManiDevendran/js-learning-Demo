const buttons=document.querySelectorAll('.button')  // selected all button using query Selector
//console.log(buttons);

// Select Body Tag
const body=document.querySelector('body');
//console.log(body);
buttons.forEach((button)=>{
    //console.log(button)
    // button.addEventListener('click',(event)=>{
    //     console.log(event);
    //     //console.log(event.target);
    // })
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target.id);
        if(e.target.id==="grey")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="blue")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="yellow")
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="white")
        {
            body.style.backgroundColor=e.target.id;
        }
    })
})