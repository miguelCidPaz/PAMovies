import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

const DetailValorations = (props) => {

    useEffect(() => {
    }, [props])

    return (<>
        {console.log(props.rating)}
        <section className="filmdetails--section filmdetails--valorations">
            <div className='filmdetails--stars'>
                {props.rating.map((element, index) => {
                    return <button key={index} className={props.puntuation > index ? 'star-point' : 'star'} value={element} onClick={(e) => props.selectScore(e.currentTarget.value)}><FontAwesomeIcon size="3x" icon={faStar} /></button>
                })}
            </div>
            <div className='filmdetails--show-or-not'>
                <button className='filmdetails--check' onClick={props.selectView}>
                    <FontAwesomeIcon color={props.view ? "yellow" : "white"} size='5x' icon={props.view ? faToggleOn : faToggleOff} />
                </button>
            </div>
        </section></>
    )
}

export default DetailValorations