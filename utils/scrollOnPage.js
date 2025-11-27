import { hideMobileMenu } from './toggleMobileMenu.js';

export const scrollOnPage = function () {
	const headerNav = document.querySelector('.header-nav');
	const foooterNav = document.querySelector('.footer-nav');
	const scrollPage = function (e) {
		const link = e.target.closest('a');
		if (!link) return;
		e.preventDefault();

		const targetId = link.getAttribute('href').substring(1);
		const targetEl = document.getElementById(targetId);
		const headerOffset = 50; // маржин сверху

		if (targetEl) {
			// Вычисляем позицию элемента относительно документа
			const elementPosition =
				targetEl.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - headerOffset;

			// Скроллим моментально или плавно с учётом маржина
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};
	headerNav.addEventListener('click', e => {
		scrollPage(e);
		hideMobileMenu();
	});
	foooterNav.addEventListener('click', e => {
		scrollPage(e);
	});
};
export const intersectionObserverFn = function () {
	const elements = document.querySelectorAll('section');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('opacity');
			}
		});
	});

	elements.forEach(elem => observer.observe(elem));
};
