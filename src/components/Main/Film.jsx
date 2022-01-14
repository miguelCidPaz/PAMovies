import React from 'react';
import {useNavigate} from "react-router-dom";

function Film(props) {
    const navigate = useNavigate();
    let keyword = props.item.poster_path
    return (
    <div className='full-container'
    onClick={() => {
        navigate(`/details/movie/${props.item.id}`);
      }}
      key={props.id}
    >
        <figure>
            {props.item.poster_path === null ? 
            <img src={`https://www.gruposertec.com/wp-content/uploads/2015/03/no_image_available.jpeg`}
                height={280}
                width={190}
            />
            :
            <img src={`https://image.tmdb.org/t/p/w500/${keyword}`}
            height={280}
            width={190}
            />
            }
            <div className='layer'>
                <p>{props.item.release_date}</p>
                <p>{props.item.title}</p>
                {/* <p>{props.vote_average}</p> */}
            </div>
        </figure>
    </div>
    )

}
export default Film
