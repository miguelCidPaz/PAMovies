import Divisor from './../Divisor/Divisor';
import settingsSlider from './settingsSlider';
import OmniItem from './OmniItem';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { decisionForType, reduxName } from './LogicAdapt';

/* Que tendra Omnibar
-id de busqueda
-type de busqueda
*/

const Omnibar = (props) => {
    const [item, setItem] = useState(undefined);
    const [names, setNames] = useState([]);

    const urlForImages = "https://image.tmdb.org/t/p/w500/";
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzG-F0HI6B8FiuAd97Mdps0ky1u-q58Q8iqA&usqp=CAU"

    useEffect(() => {
        const respuesta = async () => {
            const response = await decisionForType(props.value, props.id)
            setItem(response);
        }
        respuesta();
    }, [props])

    useEffect(() => {

    }, [item])

    //console.log(decisionForType(props.value, props.id))
    return (
        <>
            {item !== undefined && item !== null && item.length > 2
                ? <section className="omnibar--main-container">
                    <Divisor title={props.text} />
                    <div className='omnibar--container-slider'>
                        <Slider {...settingsSlider()}>
                            {item.map((element, index) => {
                                return (
                                    <>
                                        {index < item.length 
                                        ? <OmniItem element={element}/>
                                        : null}
                                    </>
                                )
                            })}
                        </Slider>
                    </div>
                </section>
                : item !== undefined && item !== null && item.length > 1
                    ? <>
                    <section className="omnibar--main-container-row">
                        <Divisor title={props.text} />
                        <div className='omnibar--row-container'>
                        {item.map(element => {
                            return <OmniItem element={element}/>
                            }) }
                        </div>
                        </section>
                       </>: null}
                     
        </>
    )

}

export default Omnibar