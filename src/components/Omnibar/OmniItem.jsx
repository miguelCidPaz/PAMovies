import { useState, useEffect } from "react";
import { reduxName } from "./LogicAdapt";

const OmniItem = (props) => {
    const [item, setItem] = useState();

    const urlForImages = "https://image.tmdb.org/t/p/w500/";
    const image = "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"

    useEffect(() => {
        if(props.element !== undefined){
            setItem(props.element)
        }
    },[props])
    console.log(item)
    return(
    <div className='omnibar--external-frame'>
        {item !== undefined && item !== null  
    ? <div className='omnibar--internal-frame'>
        <p className='omnibar--title-frame'>{reduxName(item.title) + '...'}</p>
        <img className='omnibar--poster-photo' 
        src={item.photo !== null && item.photo !== undefined 
        ? urlForImages + item.photo 
        : image} alt={`foto de ${item.title}`} 
        />
        {item.subtitle !== undefined
            ? <p className='omnibar--subtitle-frame'>{item.subtitle}</p>
            : null}
    </div>
    : null}
</div>)
}

export default OmniItem