import { showCurencyOnPage } from './showCurencyOnPage.js';

export const getExcangeRateApi = async function () {
	try {
		const responce = await fetch(
			'https://api.currencyapi.com/v3/latest?apikey=cur_live_tCCF9HP9cCUd7YdnWMQoRhQnKBjROMdKmM3MccX2&base_currency=USD&currencies=RUB,KZT,USD,EUR,CNY'
		);

		if (!responce.ok) {
			throw new Error('HTTP error ' + responce.status);
		}
		const data = await responce.json();

		const usdToRub = data.data.RUB.value;
		const ratesInRub = {
			USD: +usdToRub.toFixed(), // 1 USD → RUB
			EUR: +(usdToRub / data.data.EUR.value).toFixed(), // 1 EUR → RUB
			CNY: +(usdToRub / data.data.CNY.value).toFixed(), // 1 CNY → RUB
		};

		showCurencyOnPage(ratesInRub);
		return ratesInRub;
	} catch (err) {
		console.error('Ошибка запроса:', err);
		return null;
	}
};
