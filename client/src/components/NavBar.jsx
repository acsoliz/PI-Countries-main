import React from 'react';
import { NavLink } from 'react-router-dom';
import a from './NavBar.module.css';
import SearchBar from './SearchBar';

export default function NavBar() {
	return ( 
      
		<>
            <nav className={a.navar}>
                <div className={a.container}>
                    <ul className={a.ulStyle}>
                        <li className={a.li}>
                            <NavLink className={a.navli} to="/">
                                LANDING
                            </NavLink>
                        </li>
                        <li className={a.li}>
                            <NavLink className={a.navli} to="/home">
                                HOME
                            </NavLink>
                        </li>
                        <li className={a.li}>
                            <NavLink className={a.navli} to="/activity">
                                ACTIVITIES
                            </NavLink>{' '}
                        </li>
                        <li className={a.li}>
                            <SearchBar className = {a.search}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
	);
    
}
