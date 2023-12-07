// This below approach give less features
// document.getElementById('bird').onclick=function(){
//     alert('bird');
// }

// Best Approach ,always try to use addListener ,it will give lot of features comapred to onclick

document.getElementById('bird').addEventListener('click',()=>{
    alert("Bird Clicked")
})