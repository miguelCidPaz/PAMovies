import { useState, useEffect } from 'react'

const DetailValorations = (props) => {
    const [isSelect, setIsSelect] = useState(0);

    useEffect(() => {

    }, [props])

    return (
        <div className='details--stars'>
            {props.rating.map((element, index) => {
                return <button key={index}
                    className={props.puntuation > index || isSelect > index ? 'star-point' : 'star'}
                    value={element}
                    onMouseOver={(e) => setIsSelect(e.currentTarget.value)}
                    onMouseOut={(e) => setIsSelect(0)}
                    onClick={(e) => props.selectScore(e.currentTarget.value)}>
                    <span>★</span>
                </button>
            })}
            <p className='details--media-valorations'>({props.media})</p>
        </div>
    )
}

export default DetailValorations