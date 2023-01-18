const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__burger-menu');
const menuItem = document.querySelectorAll('.header__burger-menu li');
const contents = document.querySelectorAll('.skills-line__content');

// бургер-меню

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
});

// скиллы

contents.forEach((elem) => {
    const title = elem.querySelector('.skills-line__title');
    const descr = elem.querySelector('.skills-line__descr');

    title.addEventListener('click', () => {
        descr.classList.toggle('active');
    });
});