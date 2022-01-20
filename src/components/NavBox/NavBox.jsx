import { useState, useEffect } from "react";
import { shortString } from "../Details/Normalizer";

const NavBox = (props) => {
  const [table, setTable] = useState(props.newTab);
  const [slot, setSlot] = useState(props.libraryFilms);
  const numItems = 6;

  const parseLibrary = () => {
    let falseLibrary = [...props.libraryFilms];

    let newArr = [];
    while (falseLibrary.length > 0) {
      let aux = [falseLibrary.splice(0, numItems)];
      newArr.push(aux);
    }

    return newArr;
  };

  const changeTab = (index) => {
    setTable(index);
    props.setTab(index);
  };

  useEffect(() => {
    setSlot(parseLibrary());
    setTable(props.newTab);
  }, [props]);

  return (
    <div className="details--main-column details--container-secondary">
      {slot[table][0] !== undefined
        ? slot[table][0].map((element, index) => (
            <p
              key={index}
              className={
                props.filmSelect.key !== element.key
                  ? "details--scenes"
                  : "details--scenes-selected"
              }
              onClick={(e) => props.newIndex(element)}
            >
              {shortString(element.name)}
            </p>
          ))
        : null}
      <div className="details--container-nav-trailer">
        {slot !== undefined
          ? slot.map((element, index) => (
              <button
                key={index}
                className={
                  table === index
                    ? "details--button-nav-select"
                    : "details--button-nav"
                }
                onClick={(e) => changeTab(index)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default NavBox;
