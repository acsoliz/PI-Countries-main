const {Router} = require('express');
const axios = require('axios');
const { Activity, Country } = require('../db');
const router = Router();

const countriesRoute = router();

countriesRoute.use(router.json());

const getApiInfo = async () => {
	const apiUrl = await axios.get('https://restcountries.com/v3/all');
	// console.log (apiUrl)
	const apiInfo = await apiUrl.data.map((e) => {
		return {
			id         : e.cca3,
			name       : e.name,
			flag       : e.flag,
			continent  : e.continents,
			capital    : e.capital,
			subregion  : e.subregion,
			area       : e.area,
			population : e.population
		};
	});
	return apiInfo;
};

const getAllCountries = async () => {
	const apiInfo = await getApiInfo();
	const dbInfo = await getDbInfo();
	const infoTotal = apiInfo.concat(dbInfo);
	return infoTotal;
};

const getDbInfo = async () => {
	return await Country.findAll({
		include : {
			model     : Activity,
			attibutes : [ 'name' ],
			through   : {
				attributes : []
			}
		}
	});
};




router.get('/countries', async (req, res) => {
	const name = req.query.name;
	let countriesTotal = await getAllCountries();
	if (name) {
		console.log(countriesTotal[0].name);
		let countryName = await countriesTotal.filter((e) => e.name.common.toLowerCase().includes(name.toLowerCase()));


			countryName.length ? res.status(200).send(countryName) :
			res.status(404).send('La ciudad no se encuentra');
	} else {
		res.status(200).send(countriesTotal);
	}
});




router.get('/countries/:id', async (req, res) => {
	const { id } = req.params;
	let countriesTotal = await getAllCountries();
	const countryById = countriesTotal.find((e) => e.id.toUpperCase() === id.toUpperCase());
	if (countryById) {
		res.json(countryById);
	} else {
		res.status(404).send('La ciudad no se encuentra');
	}
});








module.exports = router;