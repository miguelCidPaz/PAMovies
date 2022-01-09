import React ,{useState} from 'react';

function GenreType(props) {
    const [myID, setMyId] = useState(props.gender_ID)  
    
    function handleChange (){
    setMyId (props.gender_ID)
    console.log(myID)
    }

    return (
       
        <div className='type-container' onClick={handleChange}>
            <img src={props.theme}
                className='image-film' width={'125px'} height={'200px'} />
            <div>
                <p className='centerGender'>{props.title}</p>
            </div>
        </div>
    )
}
export default GenreType
