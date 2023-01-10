'use strict'

// add event on element

const addEventOnElement = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

//navbar toggle

const navbar = document.querySelector('[data-navbar]')
const navbarLinks = document.querySelector('[data-nav-link]')
const navToggler = document.querySelector('[data-nav-toggler]')

const toggleNavbar = function(){
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle('active');
}

addEventOnElement(navToggler, "click", toggleNavbar);

const closeNavbar = function (){
  navbar.classList.remove('active');
  navToggler.classList.remove('active');
  document.body.classList.remove('active');
}

addEventOnElement(navbarLinks, "click", closeNavbar);

//header active
const header = document.querySelector('[data-header]');

const activeHeader = function (){
  if(window.scrollY > 300){
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
}

addEventOnElement(window, "scroll", activeHeader);