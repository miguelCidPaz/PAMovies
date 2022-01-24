import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useLocalStorage } from "./CustomStorage";
import { normalizeKeys } from "./Normalizer";

const DetailValorations = (props) => {
    const key = normalizeKeys(props.photo_principal);
    const [ratingSave, setRatingSave] = useLocalStorage(key, { totalPuntuation: 0, numVotes: 0 })
    const Media = ratingSave.totalPuntuation === 0 || ratingSave.numVotes === 0 ? 0 : Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes )
    const [isSelect, setIsSelect] = useState(Media);
    const params = useParams();
    
    /*  Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes ) < 0 
    || Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes ) === null
    ? 0 : Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes ); */

    const IntermediateFunction = (value) => {

        setRatingSave({
            totalPuntuation: ratingSave.totalPuntuation + parseInt(value),
            numVotes: ratingSave.numVotes + 1
        })

        props.selectScore(value)
    }

    
    useEffect(() => {
        /* setRatingSave({ totalPuntuation: 0, numVotes: 0 }) */
       /*  console.log('por key') */
    },[key])

    useEffect(()=>{
        console.log('Solo una vez')
    },[])

    return (
        <div className='details--stars'>
            {props.rating.map((element, index) => {
                return <button key={index}
                    className={Media > index || isSelect > index ? 'star-point' : 'star'}
                    value={element}
                    onMouseOver={(e) => setIsSelect(e.currentTarget.value)}
                    onMouseOut={(e) => setIsSelect(0)}
                    onClick={(e) => IntermediateFunction(e.currentTarget.value)}>
                    <span>★</span>
                </button>
            })}
            <p className='details--media-valorations'>({Media})</p>
        </div>
    )
}

export default DetailValorations