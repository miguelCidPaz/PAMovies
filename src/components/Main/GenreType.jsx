import React from 'react';


function GenreType(props) {

    return (
        <div className='type-container'>
            <img src={props.theme}
                className='image-film' width={'125px'} height={'200px'} />
            <div>
                <p className='centerGender'>{props.title}</p>
            </div>

        </div>
    )
}
export default GenreType
