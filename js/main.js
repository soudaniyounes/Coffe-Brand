const form = document.querySelector(".login-form");
const header = document.querySelector(".header");
const closeBtn = document.querySelector(".close");
const user = document.querySelector(".icons .usericon");

user.onclick = ()=>{
    form.classList.add("active");
}
closeBtn.onclick = ()=>{
    form.classList.remove("active");
}

window.onscroll = ()=>{
    form.classList.remove("active");

    if(window.scrollY > 0){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}



const menu = document.querySelector(".header .baricon");
const nav = document.querySelector(".header .headnav .nav");

menu.onclick = ()=>{
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
}