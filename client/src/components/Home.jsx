import { getCountries, orderByName } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
// import Paginado from './Paginado';
import AllCards from './AllCards';
import NavBar from './NavBar';


export default function Home() {
	const dispatch = useDispatch();
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


