import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useLocalStorage } from "./CustomStorage";
import { normalizeKeys } from "./Normalizer";

const DetailValorations = (props) => {
    let refresh = 0;
    const key = normalizeKeys(props.photo_principal);
    const [score, setScore] = useState({ totalPuntuation: 0, numVotes: 0 })
    const [ratingSave, setRatingSave] = useLocalStorage(key, score, refresh)
    const Media = score.totalPuntuation === 0 || score.numVotes === 0 ? 0 : Math.floor(score.totalPuntuation / score.numVotes )
    const [isSelect, setIsSelect] = useState(Media);
    const params = useParams();
    
    /*  Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes ) < 0 
    || Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes ) === null
    ? 0 : Math.floor(ratingSave.totalPuntuation / ratingSave.numVotes ); */

    useEffect(() => {

        /* setRatingSave({ totalPuntuation: 0, numVotes: 0 }) */
        console.log('por score')
    }, [score])

    useEffect(() => {
        setScore(ratingSave)
        refresh++;
        console.log('por key')
    },[key])
   
    const IntermediateFunction = (value) => {

        setScore({
            totalPuntuation: score.totalPuntuation + parseInt(value), 
            numVotes: score.numVotes + 1 
        })

        setRatingSave({
            totalPuntuation: score.totalPuntuation + parseInt(value),
            numVotes: score.numVotes + 1
        })

        props.selectScore(value)
    }

    useEffect(()=>{
        console.log('Solo una vez')
    },[])

    return (
        <div className='details--stars'>
            {props.rating.map((element, index) => {
                return <button key={index}
                    className={score.totalPuntuation / score.numVotes > index || isSelect > index ? 'star-point' : 'star'}
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