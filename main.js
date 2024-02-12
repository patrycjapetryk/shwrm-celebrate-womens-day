import './style.css';

window.addEventListener('load', () => {
  const lastArticle = document.querySelector('.page__article:nth-last-of-type(1)');

  window.onscroll = () =>
    window.pageYOffset < 200 || window.pageYOffset > lastArticle.offsetTop
      ? (document.querySelector('.page__background').style.backgroundColor = '#ffffff')
      : (document.querySelector('.page__background').style.backgroundColor = '#fce1d8');
});
