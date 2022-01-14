import React ,{useState} from 'react';
import { useNavigate } from "react-router-dom";

function GenreType(props) {
    const [myID, setMyId] = useState(props.gender_ID)  
    const navigate = useNavigate();

    function handleChange (){
    setMyId (props.gender_ID)
    console.log(myID)
    }
    
    return (
       
        <div className='type-container' id={myID}
        onClick={handleChange} 
        onClick={() => {
            navigate('/animation');
          }}>
            <img src={props.theme}
                className='image-film' width={'125px'} height={'200px'} alt="film" />
            <div>
                <p className='centerGender'>{props.title}</p>
            </div>
        </div>
    )
}
export default GenreType;
