import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
	return (
		<div className="container">
			<section className="wave-contenedor website">
				<div className="contenedor-textos-main">
					<h2 className= "title">Henry Countries</h2>
					<button className="button">
						<NavLink to="/home">
							<a className="buttonP">Empecemos!</a>
						</NavLink>
					</button>
				</div>
			</section>
			<footer className="contenedor">
				<h5>asadsda</h5>
			</footer>
		</div>
	);
}
