import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '..actions';
import { Link } from 'react-router-dom';
import Card from "./Card";

export default function Home() {
	const allCountries = useSelector((state) => state.countries); // traeme todo lo que esta en el estado de Countries

    //--------- mostrar los paises
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
		//dispatch(getActivities()); // Es lo mismo que hacer el map dispatch to props
	}, [dispatch]);


    //-----------ordenar
	function handleClick(e) {
		e.preventDefault();
		dispatch(getCountries());
	}

	return (
		<div>
			<Link to="/activity">Crear Activida</Link>
			<h1> Aguante Countries!! </h1>
			<button
				onClick={(e) => {
					handleClick(e);
				}}
			>
				Volver a cargar todos los personajes
			</button>
			<div>
				<select>
					<option value="asc">Ascendente</option>
					<option value="desc">Descendente</option>
				</select>
				<select>
					<option value="asc">Todos</option>
					<option value="desc">Descendente</option>
				</select>
                {
                    allCountries && allCountries.map(p => {
                        return <Card name={p.name} flag={p.flag} region={p.region} id={p.id}/> 
                    })
                }
			</div>
		</div>
	);
}
