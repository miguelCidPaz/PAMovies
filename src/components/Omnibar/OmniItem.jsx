import { useState, useEffect } from "react";
import { reduxName } from "./LogicAdapt"
import { Link } from "react-router-dom";

const OmniItem = (props) => {
    const [item, setItem] = useState();

    const urlForImages = "https://image.tmdb.org/t/p/w500/";
    const image = "https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"

    useEffect(() => {
        if(props.element !== undefined){
            setItem(props.element)
        }
    },[props])

    const routeLink = (id) => {
        return {
            pathname: `/details/movie/${id}`,
            key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
            state: {
                applied: true
            }
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return(
    <div className='omnibar--external-frame'>
        {item !== undefined && item !== null  
    ? <Link 
    onClick={() => scrollToTop()}
    to={routeLink(item.id)}
    className='omnibar--internal-frame'>
        <p className='omnibar--title-frame'>{reduxName(item.title) + '...'}</p>
        <img className='omnibar--poster-photo' 
        src={item.photo !== null && item.photo !== undefined 
        ? urlForImages + item.photo 
        : image} alt={`foto de ${item.title}`} 
        />
        {item.subtitle !== undefined
            ? <p className='omnibar--subtitle-frame'>{item.subtitle}</p>
            : null}
    </Link>
    : null}
</div>)
}

export default OmniItem