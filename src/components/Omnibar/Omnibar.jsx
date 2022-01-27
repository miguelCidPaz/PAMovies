import Divisor from './../Divisor/Divisor';
import settingsSlider from './settingsSlider';
import OmniItem from './OmniItem';
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
            if(props.setKeys !== null){
                props.setKeys(response.map(element => element.id))
            }
        }
        respuesta();
    }, [props])

    //console.log(decisionForType(props.value, props.id))
    return (
        <>
            {item !== undefined && item !== null && item.length > 3
                ? <section className="omnibar--main-container">
                    <Divisor title={props.text} />
                    <div className='omnibar--container-slider'>
                        <Slider {...settingsSlider()}>
                            {item.map((element, index) => {
                                return (
                                        index < item.length 
                                        ? <OmniItem 
                                        key={index}
                                        element={element}
                                        type={props.value}
                                        />
                                        : null
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
                        {item.map((element, index) => {
                            return <OmniItem key={index} element={element}/>
                            }) }
                        </div>
                        </section>
                       </>: null}
                     
        </>
    )

}

export default Omnibar