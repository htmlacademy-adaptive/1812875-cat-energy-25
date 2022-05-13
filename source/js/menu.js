var pageHead = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');
var ulMenu = document.querySelector('.main-navigation__list');
var food = document.querySelector('.food');

pageHead.classList.remove('page-header--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
ulMenu.classList.remove('main-navigation__list--nojs');
if (food) {
  food.classList.remove('food--nojs');
}

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
