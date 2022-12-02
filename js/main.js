
const ui = new UI();


function myFunction(x) {
    x.classList.toggle("change");
  }

function eventListeners(){
    document.querySelector('.navBtn').addEventListener('click',function(){
        ui.showNav();
    })
}

function UI(){}


UI.prototype.showNav = function(){
    document.querySelector('.navbar').classList.toggle('nav-show');
}

eventListeners();