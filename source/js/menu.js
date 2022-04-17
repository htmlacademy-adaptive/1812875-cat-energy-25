var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var ulMenu = document.querySelector('.main-navigation__list-none');
var mainPage = document.querySelector('.page-main');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('toggle__open')) {
    navMain.classList.remove('toggle__open');
    navMain.classList.add('toggle__close');
    ulMenu.classList.remove('main-navigation__list-none');
    mainPage.classList.add('page-main__height');

    } else {
      navMain.classList.add('toggle__open');
      navMain.classList.remove('toggle__close');
      ulMenu.classList.add('main-navigation__list-none');
      mainPage.classList.remove('page-main__height');
    }
});
