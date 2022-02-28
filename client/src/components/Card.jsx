import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Card.module.css'

export default function Card({ name, area, flags, id, population, continents }) {
	return (			
		<>
		<div className={s.card} key={id}>
			<div className={s.cardBody}>
				<NavLink className = {s.link} to={`/countries/${id}`}>
					<h5 className={s.cardTitle}>{name}</h5>
				</NavLink>
				
				<img src={flags} className={s.imgFlag} alt="countries" width="140" height="80" alt="" />
				<div className={s.tittleContinent}>
					<p>{continents}</p>
				</div>
				<div className={s.row}>
					<div className={s.boxes}>
						<p>Area:</p>
						<p>{area}</p>
					</div>
					<div className={s.boxes}>
						<p>Population:</p>
						<p>{population}</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
