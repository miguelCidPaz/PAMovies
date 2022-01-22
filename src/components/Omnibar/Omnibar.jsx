import Divisor from './../Divisor/Divisor';
import settingsSlider from './settingsSlider';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { decisionForType } from './LogicAdapt';

/* Que tendra Omnibar
-id de busqueda
-type de busqueda
*/

const Omnibar = (props) => {
    const [item, setItem] = useState(undefined);

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
            {item !== undefined && item !== null && item.length > 0
                ? <section className="omnibar--main-container">
                    <Divisor title={props.text} />
                    <div className='omnibar--container-slider'>

                        <Slider {...settingsSlider()}>
                            {item.map((element) => {
                                return (
                                    <div className='omnibar--external-frame'>
                                        <div className='omnibar--internal-frame'>
                                            <img className='omnibar--poster-photo' src={element.photo !== null ? urlForImages + element.photo : image} alt={`foto de ${element.title}`} />
                                            <p className='omnibar--title-frame'>
                                                {element.title}
                                            </p>
                                            {element.subtitle !== undefined
                                                ? <p className='omnibar--title-frame'>{element.subtitle}</p>
                                                : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </section>
                :
                null}
        </>
    )

}

export default Omnibar