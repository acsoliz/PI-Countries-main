import React from 'react';
import { NavLink } from 'react-router-dom';
import a from './LandingPage.module.css';

export default function LandingPage() {
	return (
		<>
        <div className={a.container}>
            <div className={a.textContainer}>
            <NavLink className = {a.link} to='/home'>
                <h2 className = {a.title}>Empecemos</h2>
            </NavLink>
            </div>
        </div>
        </>
	);
}


