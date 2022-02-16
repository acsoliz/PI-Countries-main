import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <div>
            <h1> Bienvenidos a mu super pagina</h1>
            <Link>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}