import { useState } from 'react'

const DetailValorations = (props) => {
    const [isSelect, setIsSelect] = useState(0);

    return (
        <section className="filmdetails--section filmdetails--valorations">
            <div className='filmdetails--stars'>
                {props.rating.map((element, index) => {
                    return <button key={index}
                        className={props.puntuation > index || isSelect > index ? 'star-point' : 'star'}
                        value={element}
                        onMouseOver={(e) => setIsSelect(e.currentTarget.value)}
                        onMouseOut={(e) => setIsSelect(0)}
                        onClick={(e) => props.selectScore(e.currentTarget.value)}>
                        <p>★</p>
                    </button>
                })}
            </div>
            <div className='filmdetails--show-or-not'>
                <button className='filmdetails--check' onClick={props.selectView}>
                    <div className={props.view ? 'filmdetails--bar-checked' : 'filmdetails--bar'}>

                    </div>
                </button>
            </div>
        </section>
    )
}

export default DetailValorations