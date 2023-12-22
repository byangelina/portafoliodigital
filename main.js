const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

// Ocultar el menú al cargar la página
smallMenu.classList.remove('header__sm-menu--active');
headerHamMenuBtn.classList.remove('d-none');
headerHamMenuCloseBtn.classList.add('d-none');

hamMenuBtn.addEventListener('click', () => {
  toggleMenu();
});

headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideMenu();
  });
});

function toggleMenu() {
  smallMenu.classList.toggle('header__sm-menu--active');
  headerHamMenuBtn.classList.toggle('d-none');
  headerHamMenuCloseBtn.classList.toggle('d-none');
}

function hideMenu() {
  smallMenu.classList.remove('header__sm-menu--active');
  headerHamMenuBtn.classList.remove('d-none');
  headerHamMenuCloseBtn.classList.add('d-none');
}