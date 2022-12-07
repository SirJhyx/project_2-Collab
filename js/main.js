
// navBtn animate when click
const navBtn = document.querySelector('.navBtn');
const navbar = document.querySelector('.navbar')
navBtn.addEventListener('click', ()=>{

    // navBtn animate when click
    navBtn.classList.toggle('change')
    // navbar collapse at left sidebar
    navbar.classList.toggle('nav-show')

});

// Video btn switch
let swtch = document.querySelector(`.video_switch`);
let btn = document.querySelector(`.video_switch-btn`);

swtch.addEventListener(`click`,function(){  
   btn.classList.toggle(`btnSlide`);
  if(!btn.classList.contains(`btnSlide`)){
    document.querySelector(`.ban_item`).play()
  }else{
    document.querySelector(`.ban_item`).pause()
  }
   
})

