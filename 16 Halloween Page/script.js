const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}

if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

//SWIPER
let homeSwiper = new Swiper('home-swiper', {
    spaceBetween: 30,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

let newSwiper = new Swiper('.new-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
})

//Scroll up
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 460) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

// Sections active
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach( current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*="+ sectionId+"]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*="+ sectionId+"]").classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive)

// Scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100});
sr.reveal(`.about__data, .discount__img`, {origin: 'left'});
sr.reveal(`.about__img, .discount__data`, {origin: 'right'});
