import React from 'react';
import ReactDOM from 'react-dom';
import { genders } from './data-main';
import Row from './Row'


function Main() {

    return (
        <div className="main-container" >
            <div className='allgenders-button'>
                <p>Todos los géneros</p>
            </div>

            <div className='distribution'>
                <Row title={genders[0].title}/>
                <Row title={genders[1].title}/>
                <Row title={genders[2].title}/>  
            </div>
        </div>
    )
}
export default Main
