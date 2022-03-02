import { getCountries, orderByName } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Paginated from './Paginated';
import AllCards from './AllCards';
import NavBar from './NavBar';


export default function Home() {
	const allCountries = useSelector((state) => state.countries); // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes
	console.log(allCountries, "soy Allconuntreies")
	//--------------mostrar los paises
	const dispatch = useDispatch();
	useEffect(() => {
		//monto el componente
		dispatch(getCountries());
		// dispatch(setCountriesXpage(9))
	}, [dispatch]);


	//--------------restaurar orden predeterminado de countries
	// function handleClick(e){
    //     e.preventDefault()
    //     dispatch(getCountries())
    // }

	// //--------------paginado
	const [currentPage, SetCurrentPage] = useState(1);//Pagina actual
	const [countriesXpage, setCountriesXpage] = useState(9); // Cuantos paises por page
	console.log(currentPage, countriesXpage, "ESTADOS LOCALES" )
	
	const lastCountry = currentPage * countriesXpage;
	const firstCountry = lastCountry - countriesXpage;
	const currentCountries = allCountries && allCountries.slice(firstCountry, lastCountry)
	console.log(allCountries, lastCountry, "Hola soy currentCountries")
	console.log(currentCountries, "Hola soy currentCountries")
	


	const paginated = (pageNum) =>{
		SetCurrentPage(pageNum)
	}

	return (
		<>	
		<div>
			<div>	
				<NavBar />	
				<h1>Home Countries</h1>
				<AllCards currentCountries={currentCountries} />
				<div>
					<Paginated
						allCountries={allCountries?allCountries.length:250}
						countriesXpage={countriesXpage}
						paginated={paginated}
					/>
				</div>				
			</div>
		</div>
		</>
	);
}
//name*, area*, flag, id


