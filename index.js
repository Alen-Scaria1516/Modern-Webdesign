//event listener for mousemove event
let circle= document.querySelector("#circle");


window.addEventListener("mousemove",function(details)
{
    let x = details.clientX;
    let y = details.clientY;
    setTimeout((function(){
        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;
    }),50)
       
});