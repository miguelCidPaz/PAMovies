import React from 'react';
export default function Divisor(props) {


    return (
        <>
            <div className='container-divisor'>
                <div className='divisor-gradient'>
                    <div className='line-blue '></div>
                    <h3 className='divisor-title'>{props.title}</h3>
                    <div className='line-purple '></div>
                </div>
            </div>

        </>
    )
}