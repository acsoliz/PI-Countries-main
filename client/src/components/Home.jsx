import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, orderByName } from '../actions/index';
import { NavLink } from 'react-router-dom';
import Card from './Card';
// import Paginado from './Paginado';
import SearchBar from './SearchBar';
import AllCards from './AllCards';
import NavBar from './NavBar';


export default function Home() {
	const dispatch = useDispatch(); // despachando acciones
	const allCountries = useSelector((state) => state.countries); // acceso al store, en vez de mapStateToProps. Trae todo en el state de recipes

	useEffect(() => {
		dispatch(getCountries());
	}, []);
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

// 	//----------muestra los paises
// 	const dispatch = useDispatch(); //dispatch (action)----> reducer
// 	useEffect(
// 		// useEfect como 2do parametro recibe una dependencia linea 20
// 		() => {
// 			dispatch(getCountries()); //es lo mismo que hacer el matchDispactch to props
// 			},
// 		[ dispatch ] // esto le dice a useState escuchando a esto y se vuelve a ejec el useEfect
// 	);

// 	// //-------restaurar orden predeterminado de countries
// 	// function handleClick(e) {
// 	// 	e.preventDefault();
// 	// 	dispatch(getCountries());
// 	// }



