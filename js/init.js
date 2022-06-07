/* Owl carousel start*/

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

/* Owl carousel end*/

// const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  "linear-gradient(to right top, #1c2331, #1c2331)",
  "linear-gradient(to right top, #1c2331, #1c2331)",
  "linear-gradient(to right top, #1c2331, #1c2331)",
];

const options = {
  threshold: 0.7
};

// let observer = new IntersectionObserver(navCheck, options);

// function navCheck(entries){
//   entries.forEach(entry => {
//     const className = entry.target.className;
//     const activeAnchor = document.querySelector(`[data-page=${className}]`);
//     const gradientIndex = entry.target.getAttribute('data-index');
//     const coords = activeAnchor.getBoundingClientRect();
//     const directions = {
//       height: coords.height,
//       width: coords.width,
//       top: coords.top,
//       left: coords.left
//     };
//     if(entry.isIntersecting){
//       bubble.style.setProperty("left", `${directions.left}px`);
//       bubble.style.setProperty("top", `${directions.top}px`);
//       bubble.style.setProperty("width", `${directions.width}px`);
//       bubble.style.setProperty("height", `${directions.height}px`);
//       bubble.style.background = gradients[gradientIndex];
//     }
//   });
// }

// sections.forEach(section => {
//   observer.observe(section);
// });


// Nav slide js
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  
  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    
  //animate links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    }
    else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
    });

    //Burger Animation
    burger.classList.toggle('toggle');


  });

}

navSlide();