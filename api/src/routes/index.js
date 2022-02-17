const { Router } = require('express');
const axios = require('axios');
const countriesRoute = require('./countries'); //
const activitiesRoute = require('./activities'); //
const { Activity, Country } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//es una funcion que va llamar al endpint de la Aip y va traer toda la info
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

const getAllCountries = async () => {
	const apiInfo = await getApiInfo();
	const dbInfo = await getDbInfo();
	const infoTotal = apiInfo.concat(dbInfo);
	return infoTotal;
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

router.post('/activities', async (req, res) => {
	let { name, difficulty, duration, season, countryId } = req.body;

	try {
		const [ activity, created ] = await Activity.findOne({
			where    : { name: name },
			defaults : {
				name       : name,
				difficulty : difficulty,
				duration   : duration,
				season     : season
			}
		});
		console.log('created en este punto ', created);

		if (created) {
			const activityDb = await Country.findAll({
				where : {
					id : countryId
				}
			});

			for (let value of activityDb) {
				await value.addActivity(activity.dataValues.id); //lleno la tabla intermedia, haciendo la relacion entre la actividad creada y
			}
			res.json(activity);
		}
		res.send('La actividad ya existe');
	} catch (error) {
		console.log(error);
	}
});

router.get('/activities', async (req, res) => {
	try {
		const activities = await Activity.findAll({
			attributes : [ 'name', 'id' ]
		});
		if (activities.length !== 0) {
			res.json(activities);
		} else {
			res.json([ { name: 'There is no activities' } ]);
		}
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;

// const resact = await activityCreated.addCountries(activityDb);
// console.log('enviando el sendIF');
// return res.send(resact);
// }
// const activityDb = await Country.findAll({
// where : {
//     id : countryId
// }
// });

// const resact = await activityCreated.addCountries(activityDb);
// console.log('enviando el send');
// res.send(resact);
