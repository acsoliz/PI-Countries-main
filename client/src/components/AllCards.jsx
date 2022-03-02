import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import a from './AllCards.module.css';

//escucho y mapeo el estadode countries y por cada uno renderizo una Card

export default function AllCards({currentCountries}) {
	return (
		<>
		<div className={a.cards}>
					{currentCountries?
				currentCountries.map((country) => 								
					<Card
						key={country.id}
						name={country.name}
						area={country.area}
						flags={country.flags}
						id={country.id}
						population={country.population}
						continents={country.continents}
					/>	
				):<h2>LOADING...</h2>}
		</div>
		</>
	);
}
