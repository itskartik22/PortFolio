/*===== SHOW MENU =====*/

// showMenu = () => {
    //     nav.classList.toggle("show-menu");
    // }
    const showMenu = (navId,toggleId) => {
    const nav = document.getElementById(navId);
    const toggle = document.getElementById(toggleId);
    if(toggle && nav){
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu("nav-menu","nav-toggle");
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click',linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    // sections.forEach(current => {
    //     const sectionHeight = current.offsetHeight
    //     const sectionTop = current.offsetTop - 50
    //     sectionId = current.getAttribute('id')

    //     if(scrollY > sectionTop && scrollY <= sectionHeight + sectionTop){
    //         document.querySelector('.nav__menu a[href+=' + sectionId + ']').classList.add("active-link")
    //     }else{
    //         document.querySelector('.nav__menu a[href+=' + sectionId + ']').classList.remove("active-link")

    //     }
    // })
}
window.addEventListener('scroll',scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 200)
    header.classList.add('scroll-header');
    else
    header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)
/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop=document.getElementById("scroll-top");
    if(this.scrollY>=560) scrollTop.classList.add('show-scroll')
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 


