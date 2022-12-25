window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menuLink = menu.querySelectorAll('.menu__link'),
          socialText = document.querySelector('.header__text'),
          socialLinks = document.querySelectorAll('.header__social');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
    socialText.addEventListener('click', () => {
        socialText.classList.toggle('header__text_active');
        socialLinks.forEach(link => {
            link.classList.toggle('header__social_active');
        });
    });

    const percentage = document.querySelectorAll('.skills__correlation-text'),
          showBar = document.querySelectorAll('.skills__percentage-showbar');

    percentage.forEach((item, i) => {
        showBar[i].style.width = item.innerHTML;
    });
});