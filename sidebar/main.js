window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    document.querySelector('#nav-btn').addEventListener('click', () => {
        nav.classList.add('nav--open');
    });
    document.querySelector('.nav__overlay').addEventListener('click', () => {
        nav.classList.remove('nav--open');
    });
});
