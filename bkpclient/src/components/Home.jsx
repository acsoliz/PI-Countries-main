import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/index';
import { NavLink } from 'react-router-dom';
import Card from "./Card";

export default function Home() {
	const allCountries = useSelector((state) => state.countries);

	//----------muestra los paises
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getCountries); //es lo mismo que hacer el matchDispactch ti props
		},
		[ dispatch ]
	);

	//-------restaurar orden predeterminado de countries
	function handleClick(e) {
		e.preventDefault();
		dispatch(getCountries());
	}

	return (
		<div>
			<div>
				<h1>Home Countries</h1>
			</div>
			{
				<div className="containerAll">
					{allCountries &&
						allCountries.map((p) => {
							return <Card name={p.name} flag={p.flag} region={p.region} id={p.id} />;
						})}
				</div>
			}
		</div>
	);
}
