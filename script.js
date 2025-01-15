const bgE=document.querySelector(".bg-image");

window.addEventListener("scroll",()=>{

    updateImage();
})


function updateImage(){
    bgE.style.opacity=1- window.pageYOffset/900;
    bgE.style.backgroundSize= 160-window.pageYOffset/10+"%";
}