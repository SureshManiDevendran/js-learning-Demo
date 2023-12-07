// This below approach give less features
// document.getElementById('bird').onclick=function(){
//     alert('bird');
// }

// below two comments also old approaches for event
//attachEvent() 
//jquery -on


// Best Approach ,always try to use addListener ,it will give lot of features comapred to onclick

document.getElementById('bird').addEventListener('click',(event)=>{
    //alert("Bird Clicked")
    console.log(event);
});
// Learn about this topic
//type,timestamp,defaultprevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenx,screeny
//altkey,ctrlkey,shiftkey,keycode

// Event propagation


document.getElementById('images').addEventListener('click',(event)=>{
    //alert("Bird Clicked")
    console.log('click inside the Ul');
},true);


document.getElementById('mobile').addEventListener('click',(event)=>{
    //alert("Bird Clicked")
    console.log('Click the mobile ');
},true);   // when true ,capturing mode on from above to below means :- click inside the Ul,Click the mobile
            //  when false  vice cersa from inside to outside (Bubbling) :- Click the mobile,click inside the Ul