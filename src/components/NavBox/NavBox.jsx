import { useState, useEffect } from 'react'
import { shortString } from '../Details/Normalizer'

const NavBox = (props) => {
    const [table, setTable] = useState(0);
    const [slot, setSlot] = useState(props.libraryFilms);
    const numItems = 6;

    const parseLibrary = () => {
        if (props.libraryFilms.length < numItems) {
            return props.libraryFilms;
        }

        let falseLibrary = props.libraryFilms;

        let newArr = [];
        while (falseLibrary.length > 0) {
            newArr.push([falseLibrary.splice(0, numItems)])
        }
        return newArr
    }

    useEffect(() => {
        setSlot(parseLibrary())
    }, [props])

    return (
        <div className="details--main-column details--container-secondary">

            {slot[table] !== undefined ? slot[table][0].map((element, index) =>
                <p key={index}
                    className={props.nameSelected !== element.name ? "details--scenes" : "details--scenes-selected"}
                    onClick={e => props.newIndex(element)}>{shortString(element.name)}</p>) : null}
            <div className='details--container-nav-trailer'>
                {slot !== undefined ? slot.map((element, index) => <button className={table === index ? 'details--button-nav-select' : 'details--button-nav'} onClick={e => setTable(index)} />) : null}
            </div>
            {/* {props.libraryFilms !== undefined ? props.libraryFilms.map((element, indexInterno) => <p key={indexInterno} className={props.libraryFilms[props.index].name !== element.name ? "details--scenes" : "details--scenes-selected"} onClick={e => props.setIndex(indexInterno)}>{shortString(element.name)}</p>) : null} */}
        </div>
    )
}

export default NavBox