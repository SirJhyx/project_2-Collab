// preloader
let preload=document.querySelector("#preloader");
window.addEventListener('load',()=>{
    preload.style.display="none";
})

// navBtn animate when click
let navBtn = document.querySelector('.navBtn');
let navbar = document.querySelector('.navbar');
navBtn.addEventListener('click', ()=>{

    // navBtn animate when click
    navBtn.classList.toggle('change')
    // navbar collapse at left sidebar
    navbar.classList.toggle('nav-show')

});



