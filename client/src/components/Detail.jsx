import { useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDetail } from '../actions';
import React, {useEffect} from 'react'; 
import {useParams} from 'react-router'
import s from './Detail.module.css';
import NavBar from './NavBar';


export default function Detail() {
    const dispatch = useDispatch();
    const {id}= useParams();

    useEffect(()=>{
        dispatch(getDetail(id));
    }, [dispatch, id])
	
    const details = useSelector((state)=>state.details)
   
    return (
		<>			
			<NavBar />
			{
        	details ?(			
				<div className={s.container}>
				<div className={s.card} key={details.id}>
				<div className={s.cardBody}>
					<h3 className={s.cardTitle}>{details.name}</h3>
					<img src={details.flags} className={s.imgFlag} alt="countries" width="280" height="160" alt="" />
					<div className={s.tittleContinent}>
						<p>{details.continents}</p>
					</div>
					<div className={s.row}>
						<div className={s.boxes}>
							<p>Capital:</p>
							<p>{details.capital}</p>
						</div>
						<div className={s.boxes}>
							<p>Subregion:</p>
							<p>{details.subregion}</p>
						</div>
					</div>
					<div className={s.row}>
						<div className={s.boxes}>
							<p>Area:</p>
							<p>{details.area}</p>
						</div>
						<div className={s.boxes}>
							<p>Population:</p>
							<p>{details.population}</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			):(<span>Country Not Found</span>)
			}
			
			<NavLink to="/home">
				<button className="butonVolver">Volver</button>
			</NavLink>
		 
		</>
	);
}
