import 'webp-in-css/polyfill';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const body = document.querySelector('body');
  const menu = document.querySelector('.header__nav-menu');

  //menu

  burger.addEventListener('click', () => {
    trigerClassses(burger, menu);
  });
  function trigerClassses(btn, showBlock) {
    if (!btn.classList.contains('show')) {
      body.classList.add('show-overlay');
      btn.classList.add('show');
      showBlock.classList.add('show');

    } else {
      body.classList.remove('show-overlay');
      btn.classList.remove('show');
      showBlock.classList.remove('show');
    }
  }

  //add class slider on adaptive


});
