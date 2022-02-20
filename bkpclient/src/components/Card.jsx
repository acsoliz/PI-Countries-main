import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import .css

export default function Card({ name, flag, region, id }) {
	const dispatch = useDispatch();

	return (
		<div className="Card">
			<NavLink
				to={`/details/${id}`}
				onClick={() => {
					dispatch(getDetail(id));
				}}
			>
				<h3 className="title" key={id}>
					{name}{' '}
				</h3>
			</NavLink>
            <h5>{region}</h5>
		</div>
	);
}
