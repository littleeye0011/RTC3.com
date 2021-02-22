//jQuery

// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 480) {
//     $("nav").addClass("fixed-header");
//   } else {
//     $("nav").removeClass("fixed-header");
//   }
// });

//JavaScript

let navBar = document.querySelector("nav");

function fixedNavbar() {
  if (window.scrollY >= 480) {
    navBar.classList.add("fixed-header");
  } else navBar.classList.remove("fixed-header");
}

window.addEventListener("scroll", fixedNavbar);
