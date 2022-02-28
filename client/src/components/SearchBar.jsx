import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions/index';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [ name, setName ] = useState(''); //name estado Local,

	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value); //tomo el valor del imput del elemento que disparo el evento
		//console.log(name);
	}

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountries(name))   
    }

	return (
		<div>
			<input type="text" placeholder="Buscar..." onChange={(e) => handleInputChange(e)} />
			<button type="submit" onClick={(e)=>handleSubmit(e)} >Buscar</button>
		</div>
	);
}
