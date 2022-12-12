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