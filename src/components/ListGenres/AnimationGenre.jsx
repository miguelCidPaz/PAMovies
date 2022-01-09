import React from 'react';


function AnimationGenre(props) {
   
   return (
        
   props.data.map((item) => (
        <div className='individual'>
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
