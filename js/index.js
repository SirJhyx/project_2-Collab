// Video btn switch
let swtch1 = document.querySelector(`.vid_switch1`);
let btn1 = document.querySelector(`.vid_switch-btn1`);

swtch1.addEventListener(`click`,function(){  
   btn1.classList.toggle(`btnSlide`);
  if(!btn1.classList.contains(`btnSlide`)){
    document.querySelector(`.vid1`).play()
  }else{
    document.querySelector(`.vid1`).pause()
  }
   
})


let swtch2 = document.querySelector(`.vid_switch2`);
let btn2 = document.querySelector(`.vid_switch-btn2`);

swtch2.addEventListener(`click`,function(){  
   btn2.classList.toggle(`btnSlide`);
  if(!btn2.classList.contains(`btnSlide`)){
    document.querySelector(`.vid2`).play()
  }else{
    document.querySelector(`.vid2`).pause()
  }
   
})

let swtch3 = document.querySelector(`.vid_switch3`);
let btn3 = document.querySelector(`.vid_switch-btn3`);

swtch3.addEventListener(`click`,function(){  
   btn3.classList.toggle(`btnSlide`);
  if(!btn3.classList.contains(`btnSlide`)){
    document.querySelector(`.vid1`).play()
  }else{
    document.querySelector(`.vid1`).pause()
  }
   
})
