import DetailValorations from "./DetailValorations"
import { filmDetail } from "./Data"
import { useEffect } from "react"
import SlotRow from "./SlotRow";

const DetailPresentation = (props) => {

    const filterDirecting = (directing) => {
        if (directing !== undefined) {
            const newArr = directing.filter(element => {
                if (element.department === 'Directing') {
                    return element
                }
            })

            console.log(newArr)
            return newArr;
        }
    }

    useEffect(() => {

    }, [props])

    console.log(props.director)
    console.log(props.casting)

    return (
        <section className="details--main-container">
            <div className="details--frame-photo">
                <img src={props.urlImage} alt={`Poster de ${props.item.name}`} />
            </div>

            <div className="details--interior-container">

                <p className="details--title">{props.item.name}</p>
                <div className="details--interior-row details--interior-row-extra">
                    <p>({props.item.date})</p>
                    {props.item.date !== null ? <DetailValorations
                        puntuation={props.rating}
                        rating={filmDetail.rating}
                        selectScore={props.selectScore}
                    /> : null}
                </div>

                {props.item.countries !== undefined ?
                    <SlotRow
                        title={"Countrie: "} //Texto a resaltar, el titulo
                        areLinks={false} //Para señalar si el arr debe ser de links o no
                        items={props.item.countries} //El item es un arr de items
                    />
                    : null}

                {props.director !== undefined ?
                    <SlotRow
                        title={"Director: "} //Texto a resaltar, el titulo
                        areLinks={true} //Para señalar si el arr debe ser de links o no
                        items={filterDirecting(props.director)} //El item es un arr de items
                    />
                    : null}

                {props.casting !== undefined ?
                    <SlotRow
                        title={"Reparto: "} //Texto a resaltar, el titulo
                        areLinks={true} //Para señalar si el arr debe ser de links o no
                        items={props.casting} //El item es un arr de items
                    />
                    : null}

            </div>
        </section>
    )
}

export default DetailPresentation