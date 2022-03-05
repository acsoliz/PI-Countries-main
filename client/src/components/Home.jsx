import { getCountries, orderByName } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import FilterContinent from './FilterContinent'
import Paginated from './Paginated';
import AllCards from './AllCards';
import NavBar from './NavBar';


export default function Home() {
	const allCountries = useSelector((state) => state.countries); // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes
	//--------------mostrar los paises
	const dispatch = useDispatch();
	useEffect(() => {
		//monto el componente
		dispatch(getCountries());
		// dispatch(setCountriesXpage(9))
	}, [dispatch]);


	//--------------restaurar orden predeterminado de countries
	function handleClick(e){
        e.preventDefault()
        dispatch(getCountries())
    }

	// //--------------paginado
	const [currentPage, setCurrentPage] = useState(1);//Pagina actual
	const [countriesXpage, setCountriesXpage] = useState(9); // Cuantos paises por page
	const lastCountry = currentPage * countriesXpage;
	const firstCountry = lastCountry - countriesXpage;
	const currentCountries = allCountries && allCountries.slice(firstCountry, lastCountry)

	
	const paginated = (pageNum) =>{
		setCurrentPage(pageNum)
	}





	return (
		<>	
		<div>
			<div>	
				<NavBar />	
				<h1>Home Countries</h1>
				<div>
					<FilterContinent setCurrentPage={setCurrentPage} />
				</div>
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



