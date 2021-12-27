import React from 'react';
import ReactDOM from 'react-dom';
import Film from './Film'
import { genders } from './data-main';


function Row(props) {
    return (
        <div className="row-container">
            <p >{props.title}</p>
            <Film />
        </div>

    )
}
export default Row