const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.getElementById('body');
const about = document.getElementById('about');
const studies = document.getElementById('studies');
const career = document.getElementById('career');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

// HAMBURGER ON/OFF 
navToggle.addEventListener('click', () =>{
    const visibility =primaryNav.getAttribute('data-visible');


    if (visibility === "false") {
        openNavigation();
        disableScroll();
        
    } else if (visibility === "true") {
        closeNavigation();
        enableScroll();
    }
    

})

// ANIMATED DOWN ARROW ICON 
$(document).ready(function() {
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
        $('.arrow').addClass('fade');
      } else{
        $('.arrow').removeClass('fade');
      }
    })
  });
/////////////// FUNCTIONS ////////////////////

//OPEN NAVIGATION
function openNavigation(){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
}

//CLOSE NAVIGATION
function closeNavigation(){
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute('aria-expanded', false);
}

// SCROLL ON/OFF
function disableScroll(){
        document.body.classList.add("stop-scrolling");
}
function enableScroll(){
        document.body.classList.remove("stop-scrolling");
}