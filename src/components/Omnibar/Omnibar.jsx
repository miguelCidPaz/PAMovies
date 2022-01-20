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
    const [item, setItem] = useState();

    const respuesta = async () => {
        const response = await decisionForType(props.value, props.id)
        setItem(response);
    }

    useEffect(() => {
        respuesta();
    }, [])

    console.log(item)
    //console.log(decisionForType(props.value, props.id))
    return (
        <section className="omnibar--main-container">
            <Divisor title="Omnibar" />
            <div className='omnibar--container-slider'>
                {item !== undefined ?
                    <Slider {...settingsSlider()}>
                        {item.map((element, index) => {
                            return (
                                <div className='omnibar--external-frame'>
                                    <div className='omnibar--internal-frame'>
                                        <p className='omnibar--title-frame'>
                                            {element.original_title}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    :
                    <div className="details--container-spinner"><span className="details--spinner"></span></div>}
            </div>



        </section>
    )

}

export default Omnibar