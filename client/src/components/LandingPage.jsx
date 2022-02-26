import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
	return (
		<div className="container">
			<section className="wave-contenedor website">
				<div className="contenedor-textos-main">
					<h2 className= "title">Henry Countries</h2>
					{/* <button className="button"> */}
						<NavLink to="/home" activeClassName='active'>
							 Empecemos!
						</NavLink>
					{/* </button> */}
				</div>
			</section>
			<footer className="contenedor">
				<h5>By Acsoliz</h5>
			</footer>
		</div>
	);
}
