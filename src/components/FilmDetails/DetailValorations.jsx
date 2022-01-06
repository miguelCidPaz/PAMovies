import { useState } from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

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
                        <span>★</span>
                    </button>
                })}
            </div>
            <div className='filmdetails--show-or-not'>
                <FormControlLabel control={<Switch
                    onClick={props.selectView}
                    checked={props.view}
                    color="warning"
                    size="large"
                />} label={props.view === true ? "La vere" : "No la vere"} />

            </div>
        </section>
    )
}

export default DetailValorations