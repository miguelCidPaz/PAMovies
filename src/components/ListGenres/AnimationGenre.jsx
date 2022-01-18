import React from 'react';
import { useNavigate } from "react-router-dom";

function AnimationGenre(props) {
   const navigate = useNavigate();
 
   return (
   props.data.map((item) => (
        <div className='individual'
        onClick={() => {
            navigate(`/details/movie/${item.id}`);
          }}
        key={item.id}>
           
            <p className='ind-title'>{item.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            height={280}
            width={170}
            />
            
        </div>
    ))
   )
}
export default AnimationGenre
