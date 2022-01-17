import React ,{useState} from 'react';
import { useNavigate } from "react-router-dom";

function GenreType(props) {
    const [myID, setMyId] = useState(
        {id : props.id, 
        title: props.title}
    )  
    
    const navigate = useNavigate();
    function handleChange (){
    setMyId (myID.id)
    }
    
    let newid = myID.id
    let newtitle = myID.title

      return (
       
        <div className='type-container'
        newid={myID.id}
        newtitle ={myID.title}
        onClick={handleChange} 
        onClick={() => { 
            navigate(`/Genres/${newtitle}/${newid}/`);
          }} 
        key={newid}>
         
            <img src={props.theme}
                className='image-film'
                width={'150px'} 
                height={'220px'}
                alt="film" />
            <div>
                <p className='centerGender'>{props.title}</p>
            </div>
        </div>
    )
}
export default GenreType;
