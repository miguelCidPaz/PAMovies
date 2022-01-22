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

    useEffect(() => {
        const respuesta = async () => {
            const response = await decisionForType(props.value, props.id)
            setItem(response);
        }
        respuesta();
    }, [props])

    console.log(item)

    //console.log(decisionForType(props.value, props.id))
    return (<>
        {item !== undefined && item.length > 0 ? <section className="omnibar--main-container">
            <Divisor title="Omnibar" />
            <div className='omnibar--container-slider'>

                <Slider {...settingsSlider()}>
                    {item.map((element, index) => {
                        return (
                            <div className='omnibar--external-frame'>
                                <div className='omnibar--internal-frame'>
                                    <p className='omnibar--title-frame'>
                                        {element.title}
                                    </p>
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