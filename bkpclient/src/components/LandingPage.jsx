import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
	return (
		<div>
			<h1> Welcome!!!</h1>
			<NavLink to="/home">
				<a className="buttonPrincipal">Start!</a>
			</NavLink>
		</div>
	);
 }
