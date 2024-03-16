const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("openn"); 
}) 

// scroll lock 
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("openn")) 
    document.querySelector(".style-switcher").classList.remove("openn"); 
}) 


// chage skin color 
const alternatestyle=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternatestyle.forEach((style)=>{
        if(color=== style.getAttribute("title")){
            style.removeAttribute("disabled")
        } 
        else{
            style.setAttribute("disabled","true")
        }
    })
} 


// dark light 
const dayNight =document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
}) 

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } 
    else{
        dayNight.querySelector("i").classList.toggle("fa-moon");
    }
})