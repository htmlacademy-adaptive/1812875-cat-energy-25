var pageHead = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');
var ulMenu = document.querySelector('.main-navigation__list-none');
var pageHi = document.querySelector('.page-main');

navToggle.addEventListener('click', function() {
  if (pageHead.classList.contains('page-header--open')) {
    pageHead.classList.remove('page-header--open');
    pageHead.classList.add('page-header--close');
    ulMenu.classList.remove('main-navigation__list-none');
    pageHi.classList.add('page-main--height');

    } else {
      pageHead.classList.add('page-header--open');
      pageHead.classList.remove('page-header--close');
      ulMenu.classList.add('main-navigation__list-none');
      pageHi.classList.remove('page-main--height');
    }
});
