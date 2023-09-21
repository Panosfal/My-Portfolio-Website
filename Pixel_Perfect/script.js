const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

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