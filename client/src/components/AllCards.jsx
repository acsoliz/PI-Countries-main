import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import a from './AllCards.module.css';

//escucho y mapeo el estadode los personajes y por cada uno renderizo una Card

export default function AllCards() {
	//En una variable me guardo el estado global, con el useSelec accedo al
	//estado global y me traigo el que quiere en este caso countries
	const allCountries = useSelector((state) => state.countries); //array paises
	return (
		<>
		<div className={a.cards}>
			{allCountries &&
				allCountries.map((country) => {
					return (
						<div key={country.id}>
							<Card
								name={country.name}
								area={country.area}
								flags={country.flags}
								id={country.id}
								population={country.population}
								continents={country.continents}
							/>
						</div>
					);
				})}
		</div>
		</>
	);
}
