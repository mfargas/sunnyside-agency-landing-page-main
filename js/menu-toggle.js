const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const mediaQueryMobile = window.matchMedia('(max-width: 425px)');

const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");

// function screenResize(e){
//     if(e.matches){
//         burgerButton.addEventListener('click', => {
//             mobileMenu.classList.toggle("mobile-mode")
//         });
//     }
// }

mediaQueryMobile.addListener(screenResize);

screenResize(mediaQueryMobile);