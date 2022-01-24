const Description = (props) => {
  return (
    <section className="details--main-container details--main-column details--mobile">
      <div className="details--companies-container">
        {props.item.details !== undefined && props.item.details.length > 0 ? (
          <p className="details--text-resalt">Companies:</p>
        ) : null}
        {props.item.details !== undefined
          ? props.item.details.map((element, index) => (
              <p key={index}>{element.name}</p>
            ))
          : null}
      </div>

      {props.item.description !== undefined &&
      props.item.description !== null &&
      props.item.description.length > 0 ? (
        <div className="details--interior-row">
          <p className="details--text-resalt">Description:</p>
          <p>{props.item.description}</p>
        </div>
      ) : null}
    </section>
  );
};

export default Description;
