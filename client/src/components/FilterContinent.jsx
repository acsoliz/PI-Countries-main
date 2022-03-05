import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByContinent, getCountries } from '../actions';
import s from './FilterContinent.module.css';

export default function FilterContinent ({setCurrentPage}){
     const dispatch = useDispatch();

     function handleFilterContinent(e){
        dispatch(filterByContinent(e.target.value))
        // dispatch(getCountries)
        setCurrentPage(1);
     }
     return (
         <select onChange={e=> handleFilterContinent(e)} >
             <option defaultValue="true" disabled="disabled">Select Continent</option>
             <option value= "All">All</option>
             <option value= "Africa" >Africa</option>
             <option value= "Antarctica">Antarctica</option>
             <option value= "Asia">Asia</option>
             <option value= "Europe">Europe</option>
             <option value= "North America">North America</option>
             <option value= "Oceania">Oceania</option>
             <option value= "All">South America</option>
         </select>
     )


}