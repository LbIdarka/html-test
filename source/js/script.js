'use strict';

var html = document.querySelector('.nojs');
html.classList.remove('nojs');

// меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  // navMain.classList.toggle('main-nav--closed');
  // navMain.classList.toggle('main-nav--opened');
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
