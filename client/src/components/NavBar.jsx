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
                            <div className={a.divHome}>
                                <NavLink className={a.navli} to="/home">
                                    HOME
                                </NavLink>
                            </div>
                            
                        </li>
                        <li className={a.li}>
                            <div className = {a.divSearch}>
                                <SearchBar/>
                            </div>
                        </li>
                        <li className={a.li}>
                            <div className={a.divLi}>
                                <NavLink className={a.navli} to="/activity">
                                    ACTIVITIES
                                </NavLink>{' '}
                            </div>
                            
                        </li>                       
                    </ul>
                </div>
            </nav>
        </>
	);
    
}
