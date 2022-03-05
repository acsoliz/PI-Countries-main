import { getCountries, orderByName } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import FilterContinent from './FilterContinent'
import Paginated from './Paginated';
import AllCards from './AllCards';
import NavBar from './NavBar';
import { buttonsToOrderNum } from '../actions/index';


export default function Home() {
	const allCountries = useSelector((state) => state.countries); // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes
	//--------------mostrar los paises
	const dispatch = useDispatch();
	useEffect(() => {
		//monto el componente
		dispatch(getCountries());
		// dispatch(setCountriesXpage(9))
	}, [dispatch]);

	//----------- Ordenarlos
	const[orden, setOrden]= useState('')

	function handleFilterByPopulation(e){
		e.preventDefault();
		dispatch(buttonsToOrderNum(e.target.value))// DESPACHAR UN BOTONNNN CON EL E.TARGET!!!!
		setOrden(e.target.value)
	}



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
	console.log(currentCountries) // array con nueve paises
	
	const paginated = (pageNum) =>{
		setCurrentPage(pageNum)
	}
	//--------------



	

	return (
		<>	
		<div>
			<div>	
				<NavBar />	
				<h1>Home Countries</h1>
				<div>
					<FilterContinent setCurrentPage={setCurrentPage} />
				</div>
				<div className="filterPeople">
					<div className="filterPeopleLabel">
						<label>Ordená por cantidad de población</label>
					</div>
					<select onChange={(e) => {handleFilterByPopulation(e)}} className="filterPeopleButon">
						<option>--------------</option>
						<option value='menos'>Menor cantidad</option>
						<option value='mas'>Mayor cantidad</option>
					</select>   
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
//name*, area*, flag, id


