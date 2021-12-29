import React from 'react';
import ReactDOM from 'react-dom';
import { genders, images} from './data-main';
import Row from './Row'


function Main() {

    return (
        <div className="main-container" >
            <div className='allgenders-button'>
                <p>Todos los géneros</p>
            </div>

            <div className='distribution'>
                <Row title={genders[0].title} images={images[0].src} />
                <Row title={genders[1].title} images={images[1].src}/>
                <Row title={genders[2].title} images={images[2].src}/>  
            </div>
        </div>
    )
}
export default Main
