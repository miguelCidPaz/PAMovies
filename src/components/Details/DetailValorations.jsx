import { useState } from 'react'

const DetailValorations = (props) => {
    const [isSelect, setIsSelect] = useState(0);

    return (
        <section className="details--section details--valorations">
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
            </div>
        </section>
    )
}

export default DetailValorations