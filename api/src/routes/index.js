const { Router } = require('express');
const axios = require('axios');
// const countriesRoute = require('./countries'); //
// const activitiesRoute = require('./activities'); //
const { Activity, Country } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//es una funcion que va llamar al endpoint de la Aip y va traer toda la info
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
	const {name, difficulty, duration, season, countries} = req.body;

    const newActivity = await Activity.create({
        name: name.charAt(0).toUpperCase()+name.slice(1),
        difficulty,
        duration,
        season,
        countries
    })

    await newActivity.addCountries(countries);

    const foundActivity = await Activity.findAll({
        where:{
            name: name.toUpperCase()
        },

        include: [{
            model: Country,
            attributes:['name']
        }] 
    })
	console.log(newActivity)
    return res.status(200).json(foundActivity)
});

router.get('/activities', async (req, res) => {
  
    const activitiesCreated = await Activity.findAll({
        include: Country
    })
	console.log(Country)
    res.status(200).json(activitiesCreated)
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
