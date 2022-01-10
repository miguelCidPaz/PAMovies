import React from 'react';


function Film(props) {

    let keyword = props.img

    return (
        <div className='contenedor'>
            <figure className='image-container'>
                <img src={`https://image.tmdb.org/t/p/w500/${keyword}`}
                    height={280}
                    width={170}
                />
                <div className='capa'>
                    <p>{props.date}</p>
                    <p>{props.title}</p>
                    <p>{props.puntuation}</p>
                </div>
            </figure>
        </div>
    )

}
export default Film
