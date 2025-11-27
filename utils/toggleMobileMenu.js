const body = document.querySelector('body');
const mobileContainer = document.querySelector('.header-mobile__wrapper');
const mobilBarBtn = document.querySelector('.header-contact__menu-bar');
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header-top');
const background = document.querySelector('.background');

const menuBarItems = document.querySelectorAll(
	'.header-contact__menu-bar span'
);

const showMobileMenu = function () {
	mobileContainer.classList.add('header-mobile__show');
	headerTop.classList.add('header-top--mobile__padding');
	mobileContainer.style.borderRadius = '0 0 16px 16px';
	body.style.overflow = 'hidden';
	background.classList.add('background-active');
	background.classList.add('backgroud-opacity');
	mobilBarBtn.classList.add('menu-bar__active');
	menuBarItems[1].style.display = 'none';
	menuBarItems[0].style.transform = 'rotate(-45deg)';
	menuBarItems[2].style.transform = 'rotate(45deg)';
	menuBarItems[2].style.marginTop = '-6px';
};

export const hideMobileMenu = function () {
	mobileContainer.classList.remove('header-mobile__show');
	headerTop.classList.remove('header-top--mobile__padding');
	// mobileContainer.style.borderRadius = '0 0 16px 16px';
	body.style.overflow = 'auto';
	background.classList.remove('background-active');
	background.classList.remove('backgroud-opacity');
	mobilBarBtn.classList.remove('menu-bar__active');
	menuBarItems[1].style.display = 'block';
	menuBarItems[0].style.transform = 'rotate(0)';
	menuBarItems[2].style.transform = 'rotate(0)';
	menuBarItems[2].style.marginTop = '0px';
};

export const toggleMobileMenu = function () {
	mobilBarBtn.addEventListener('click', () => {
		if (!mobilBarBtn.classList.contains('menu-bar__active')) {
			showMobileMenu();
		} else {
			hideMobileMenu();
		}
	});
	background.addEventListener('click', () => {
		hideMobileMenu();
	});
};
