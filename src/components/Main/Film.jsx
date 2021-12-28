import React from 'react';
import ReactDOM from 'react-dom';

function Film(props) {

    return (
        <>
           <img src={props.image} className='image-film' width={'120px'} height={'200px'} />
        </>
    )
}
export default Film
