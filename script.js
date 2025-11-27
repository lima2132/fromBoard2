'use strict';
import { toggleMobileMenu } from './utils/toggleMobileMenu.js';
import { getExcangeRateApi } from './utils/getExchangeRateApi.js';
import { scrollOnPage } from './utils/scrollOnPage.js';
import { intersectionObserverFn } from './utils/scrollOnPage.js';
import { createCarousel } from './utils/createCarousel.js';
toggleMobileMenu();
getExcangeRateApi();
scrollOnPage();
try {
	intersectionObserverFn();
} catch (error) {
	console.error(error);
}
createCarousel();
