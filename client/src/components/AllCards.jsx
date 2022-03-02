import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import a from './AllCards.module.css';

//escucho y mapeo el estadode los personajes y por cada uno renderizo una Card

export default function AllCards() {
	
	const allCountries = useSelector((state) => state.countries); //array paises
	return (
		<>
		<div className={a.cards}>
			{console.log(allCountries, "Aqui en All cards")}
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
