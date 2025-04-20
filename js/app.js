const mainCarusel= document.querySelector(".carusel_img img")
const toPopap = document.querySelector(".card_section" )
const btnHiddin = document.querySelector(".btn")
const btnUnfollow = document.querySelector(".unfollo")
function changeImage(poth){
    mainCarusel.setAttribute("src" , poth)
}
function showSection(){
    
    toPopap.classList.add("show")
  
}
function hideSection(){
    toPopap.classList.remove("show")
   
}
function hidebtn(){
    btnHiddin.classList.remove("show")
}
function showbtn(){
    btnHiddin.classList.add("show")
}

