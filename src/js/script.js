// burger menu 
let burgerButton = document.getElementById("navbar__burger");
let nav = document.getElementById("navbar__nav");
let brand = document.getElementById("navbar-c__brand");
let brandMenu = document.getElementById("navbar-c__brand-menu");

burgerButton.onclick = function () {
  if (nav.classList.value === 'navbar-c__nav') {
    nav.classList.remove('navbar-c__nav');
    nav.classList.add('navbar-c__nav-shown');

  } else {
    nav.classList.remove('navbar-c__nav-shown');
    nav.classList.add('navbar-c__nav');
  }
}
