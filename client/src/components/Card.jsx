import React from 'react';

export default function Card({ name, area, flags, id, population, continents }) {
	return (			
		<>
		<div className="card" key={id}>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<img src={flags} alt="countries" width="80" height="80" alt="" />
				<div className="col-sm-4 col-md-4 col-lg-4">
					<p>{continents}</p>
				</div>
				<div className="row">
					<div className="col-sm-4 col-md-4 col-lg-4">
						<p>area:</p>
						<p>{area}</p>
					</div>
					<div className="col-sm-4 col-md-4 col-lg-4">
						<p>Population:</p>
						<p>{population}</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
