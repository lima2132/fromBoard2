export const showCurencyOnPage = function ({ USD, EUR, CNY }) {
	const currencyItem = document.querySelectorAll('.currency-item');

	const html = `1 $ = ${USD} ₽ | 1 € = ${EUR} ₽ | 1 ¥ = ${CNY} ₽`;
	currencyItem.forEach(item => {
		item.textContent = html;
	});
};
