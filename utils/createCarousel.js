export const createCarousel = function () {
	const carouselTrack = document.querySelector('.reviews-carousel');
	const carouselBlock = document.querySelectorAll('.reviews-block');

	const nextBtn = document.querySelector('.reviews-arrow__right');
	const prevBtn = document.querySelector('.reviews-arrow__left');

	let gapWidth, elemWidth, carouselContainerWidth, totalWidth, carouselLength;
	let translate = 0;

	// --- Функция пересчёта размеров ---
	const recalcSizes = () => {
		const styles = getComputedStyle(carouselTrack);
		gapWidth = parseFloat(styles.gap);
		elemWidth = carouselBlock[0].clientWidth;
		carouselContainerWidth = carouselTrack.clientWidth;
		totalWidth = elemWidth + gapWidth;
		carouselLength = carouselBlock.length;

		// При resize оставим карусель в начальном положении
		translate = 0;
		carouselTrack.style.transform = `translateX(0px)`;
	};

	// --- Первый пересчёт при загрузке ---
	recalcSizes();

	// --- Пересчитываем при изменении ширины окна ---
	window.addEventListener('resize', recalcSizes);

	const moveRigth = function () {
		translate -= totalWidth;
		carouselTrack.style.transform = `translateX(${translate}px)`;

		if (carouselContainerWidth < 600) {
			// mobile — 1 элемент
			if (translate <= -totalWidth * carouselLength) {
				translate = 0;
				carouselTrack.style.transform = `translateX(0px)`;
			}
		} else {
			// desktop — 2 элемента
			if (translate <= -totalWidth * (carouselLength - 1)) {
				translate = 0;
				carouselTrack.style.transform = `translateX(0px)`;
			}
		}
	};

	const moveLeft = function () {
		translate += totalWidth;
		carouselTrack.style.transform = `translateX(${translate}px)`;

		if (carouselContainerWidth < 600) {
			if (translate > 0) {
				translate = -totalWidth * (carouselLength - 1);
				carouselTrack.style.transform = `translateX(${translate}px)`;
			}
		} else {
			if (translate > 0) {
				translate = -totalWidth * (carouselLength - 2);
				carouselTrack.style.transform = `translateX(${translate}px)`;
			}
		}
	};
	nextBtn.addEventListener('click', () => {
		moveRigth();
	});

	// --- Кнопка PREV ---
	prevBtn.addEventListener('click', () => {
		moveLeft();
	});

	//////////////////////////////////////////////////////////
	let startX, endX;
	carouselTrack.addEventListener('touchstart', e => {
		e.preventDefault();
		const touche = e.touches;

		startX = touche[0].clientX;
	});

	carouselTrack.addEventListener('touchmove', e => {
		e.preventDefault();
	});

	carouselTrack.addEventListener('touchend', e => {
		e.preventDefault();
		endX = e.changedTouches[0].clientX;
		console.log(endX);
		if (startX - endX > 40) {
			moveRigth();
		}
		if (startX - endX < 40) {
			moveLeft();
		}
	});
};
