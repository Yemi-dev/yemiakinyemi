const modeToggle = document.getElementById('mode-toggle');
const body = document.querySelector('body');
const topBtn = document.querySelector('.go-top');
let scrollpos = 0;

let getMode = localStorage.getItem('mode')
    // console.log(getMode , 'hello');

document.addEventListener('DOMContentLoaded', setLS);
document.addEventListener('scroll', btnAppear);

function setLS(){
     if (getMode === 'light'){
        body.classList.add('light')
        body.classList.remove('dark')
    } if (getMode === 'dark'){
        body.classList.add('dark')
        body.classList.remove('light')
    }
    else{
        return;
    }
}

function btnAppear(){
    let scrollpos = window.scrollY;
    if (scrollpos > '1000'){
        topBtn.style.display = 'block'
    }else {
        topBtn.style.display = 'none'
    }
    
}

if(modeToggle){modeToggle.addEventListener('click', toggleMode);}



function toggleMode(e) {
    e.preventDefault();
    if ( getMode === 'light' ){
        body.classList.remove('light')
        body.classList.add('dark')
        localStorage.setItem('mode','dark')
       getMode = localStorage.getItem('mode');
    } else {
        body.classList.add('light')
        body.classList.remove('dark')
        localStorage.setItem('mode','light');
        getMode = localStorage.getItem('mode');
    }
}

ScrollReveal().reveal('.card1', {delay:300});
ScrollReveal().reveal('.card2', {delay:300});
ScrollReveal().reveal('.card3', {delay:300});
ScrollReveal().reveal('.card4', {delay:300});
ScrollReveal().reveal('.reveal1', {delay:300});
ScrollReveal().reveal('.reveal2', {delay:300});
ScrollReveal().reveal('.repo', {delay:300});
ScrollReveal().reveal('.contact-section', {delay:300});
ScrollReveal().reveal('.skills-section', {delay:300});
ScrollReveal().reveal('.portfolio-header', {delay:300});
