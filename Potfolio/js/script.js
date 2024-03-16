const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length,
allsection=document.querySelectorAll(".section"),
totalSection=allsection.length;
for(let i=0; i<totalNavList; i++){
   
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){ 
        for(let j=0 ;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this)
    })
} 
function  showSection(element){ 
    for(let i=0;i<totalSection;i++){
        allsection[i].classList.remove("active") 
        allsection[i].classList.add("hidden")

    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active") 
    document.querySelector("#"+target).classList.remove("hidden")
} 


const navTogglerBtn =document.querySelector(".nav-toggle"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
}) 
function asideSectionTogglerBtn(){
    aside.classList.toggle("open") 
    navTogglerBtn.classList.toggle("ope") 
    for(let i=0;i<totalSection;i++){
        allsection[i].classList.toggle("open");
    }
}