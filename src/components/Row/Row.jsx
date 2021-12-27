import React from 'react';
import ReactDOM from 'react-dom';
import Film from '../Film/Film'
import { genders } from '../Main/data-main';
function Row() {

    return (
        genders.map(title => {
            // {console.log(title)}
            return <>
                <div className="main-container">
                    <p>{title}</p>
                    <div className='distribution'>
                        <Film />
                    </div>
                    
                </div>
            </>
        })
    )
}
export default Row