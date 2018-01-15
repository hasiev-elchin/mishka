var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var buyBtns = document.querySelectorAll('.catalog-item__buy-btn');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var topratedBtn = document.querySelector('.toprated-item__button');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--close');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--close');
  }
});

var buyBtnsArray = Array.prototype.slice.call(buyBtns);

for (var i = 0; i < buyBtnsArray.length; i++) {
  buyBtnsArray[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
    overlay.classList.remove('modal--closed');
    overlay.classList.add('modal--opened');
  });
}

if (topratedBtn) {
  topratedBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
    overlay.classList.remove('modal--closed');
    overlay.classList.add('modal--opened');
  })
}

if (overlay) {
  overlay.addEventListener('click', function () {
    overlay.classList.add('modal--closed');
    overlay.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  })
}
