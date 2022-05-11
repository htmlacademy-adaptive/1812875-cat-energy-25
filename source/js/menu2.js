var pageHead = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');
var ulMenu = document.querySelector('.main-navigation__list');

pageHead.classList.remove('page-header--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
ulMenu.classList.remove('main-navigation__list--nojs');

navToggle.addEventListener('click', function() {
  if (pageHead.classList.contains('page-header--open')) {
    pageHead.classList.remove('page-header--open');
    pageHead.classList.add('page-header--close');
    ulMenu.classList.remove('main-navigation__list--none');

    } else {
      pageHead.classList.add('page-header--open');
      pageHead.classList.remove('page-header--close');
      ulMenu.classList.add('main-navigation__list--none');
    }
});
