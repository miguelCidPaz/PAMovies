
const Description = (props) => {

    return (
        <section className="details--main-container details--main-column">
            <div className="details--companies-container">
                <p className="details--text-resalt">Companies:</p>
                {props.item.details !== undefined ? props.item.details.map((element, index) => <p key={index}>{element.name}</p>) : null}
            </div>
            <div className="details--interior-row">
                <p className="details--text-resalt">Description:</p>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}

export default Description