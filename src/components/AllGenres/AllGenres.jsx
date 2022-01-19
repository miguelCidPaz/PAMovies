import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import {genres} from '../Main/data-main'
import Divisor from '../Divisor/Divisor'

export default function AllGenres() {
    const location = useLocation().state;
    const navigate = useNavigate();
    
    return(<div>
    <Divisor title="ALL CATEGORIES"></Divisor>
    <div className="containerGenres container">
    {location.map((element) => (
        <div
        className='type-container'
        key={element.id}
        onClick={() => {
            navigate(`/Genres/${element.name}/${element.id}`);
        }}
        key={element.id}
        >
            <img src={genres.src} height={250} width={160} className='image-film'/>
            <p className='centerGender big'>{element.name}</p>
        </div>
    ))}
    </div>
    </div>
    )
    
}

