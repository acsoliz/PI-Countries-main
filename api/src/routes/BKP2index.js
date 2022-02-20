const { Router } = require('express');
const countriesRoute = require('./countries'); //
const activitiesRoute = require('./activities'); //
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//es una funcion que va llamar al endpoint de la Aip y va traer toda la info
router.use('/countries', countriesRoute)
router.use('/activities', activitiesRoute)


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
