var pageHead = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');
var ulMenu = document.querySelector('.main-navigation__list-none');
var pageHenojs = document.querySelector('.page-header--nojs');
var pageHetonojs = document.querySelector('.page-header__toggle-nojs');
var mainNavnojs = document.querySelector('.main-navigation__list-nojs');
var foodNojs = document.querySelector('.food--nojs');

pageHenojs.classList.remove('page-header--nojs');
pageHetonojs.classList.remove('page-header__toggle-nojs');
mainNavnojs.classList.remove('main-navigation__list-nojs');
foodNojs.classList.remove('food--nojs');

navToggle.addEventListener('click', function() {
  if (pageHead.classList.contains('page-header--open')) {
    pageHead.classList.remove('page-header--open');
    pageHead.classList.add('page-header--close');
    ulMenu.classList.remove('main-navigation__list-none');

    } else {
      pageHead.classList.add('page-header--open');
      pageHead.classList.remove('page-header--close');
      ulMenu.classList.add('main-navigation__list-none');
    }
});
