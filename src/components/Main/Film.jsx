import React from 'react';


function Film(props) {

    let keyword = props.img

    return (
    <div className='full-container'>
        <figure className='image-container'>
            {props.img === null ? 
            <img src={`https://www.gruposertec.com/wp-content/uploads/2015/03/no_image_available.jpeg`}
                height={280}
                width={170}
            />
            :
            <img src={`https://image.tmdb.org/t/p/w500/${keyword}`}
            height={280}
            width={170}
            />
            }
            <div className='layer'>
                <p>{props.date}</p>
                <p>{props.title}</p>
                {/* <p>{props.puntuation}</p> */}
            </div>
        </figure>
    </div>
    )

}
export default Film
