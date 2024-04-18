const bar = document.querySelector('.responsive-bar')
const navMobile = document.querySelector('.mobile-nav')
const navMobileBG = document.querySelector('.mobile-navBG')
const sideBody = document.querySelector('.body')

bar.addEventListener('click', function (){
    bar.classList.toggle('is-active')
    navMobile.classList.toggle('is-active')
    navMobileBG.classList.toggle('is-active')
    sideBody.classList.toggle('is-active')
});


const hiddenElements = document.querySelectorAll()
hiddenElements.forEach((el) => observer.observe(el));


function scrollToBottom(){
    var height = document.body.scrollHeight;
     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
     navMobile.classList.remove('is-active')
     bar.classList.remove('is-active')
     navMobileBG.classList.remove('is-active')
     sideBody.classList.remove('is-active')
}
function sidebarButton(){
  navMobile.classList.remove('is-active')
  bar.classList.remove('is-active')
  navMobileBG.classList.remove('is-active')
  sideBody.classList.remove('is-active')
}



