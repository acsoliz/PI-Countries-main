import { getCountries, orderByName } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Paginated from './Paginated';
import AllCards from './AllCards';
import NavBar from './NavBar';


export default function Home() {
	const allCountries = useSelector((state) => state.countries); // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes
	
	//--------------mostrar los paises
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCountries());
		// dispatch(setCountriesXpage(10))
	}, [dispatch]);


	//--------------restaurar orden predeterminado de countries
	// function handleClick(e){
    //     e.preventDefault()
    //     dispatch(getCountries())
    // }

	// //--------------paginado
	// const [currentPage, SetCurrentPage] = useState(1);
	// const [countriesXpage, setCountriesXpage] = useState(10);
	
	// const lastCountry = currentPage * countriesXpage;
	// const firstCountry = lastCountry - countriesXpage;
	// let currentCountries = allCountries && allCountries.slice(firstCountry, lastCountry)
	// let pages= [];

	// const paginated = (pageNum) =>{
	// 	SetCurrentPage(pageNum)
	// }

	return (
		<>	
		<div>
			<div>	
				<NavBar />	
				<h1>Home Countries</h1>		
				<AllCards/>			
			</div>
		</div>
		</>
	);
}
//name*, area*, flag, id


