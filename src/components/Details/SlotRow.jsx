import { Link } from "react-router-dom"

const SlotRow = (props) => {
    //Route detecta que estamos en la misma ruta, asi que creamos un objeto sustituto con una clave unica para forzarlo
    const routeLink = (id, type) => {
        return {
            pathname: `/details/${type}/${id}`,
            key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
            state: {
                applied: true
            }
        }
    }

    return (
        <div className="details--interior-row">
            {props.title !== undefined && props.items !== undefined 
            && props.items.length > 0 
            ? <p className="details--text-resalt">{props.title}</p> 
            : null}

            {props.areLinks ?
                props.items !== undefined
                && props.items.length > 0 ? props.items.map((element, index) => index < 15 ? <Link key={index} className={"details--casting"} to={routeLink(element.id, "person")}>{element.name}</Link> : null) : null
                :
                props.items !== undefined
                && props.items.length > 0 ? props.items.map((element, index) => index < 10 ? <p key={index} className="details--link">{element}</p> : null) : null
            }
        </div>
    )
}

export default SlotRow