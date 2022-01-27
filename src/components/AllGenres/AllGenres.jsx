import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { genres } from "../Main/data-main";
import Divisor from "../Divisor/Divisor";
import Randomizer from "../Randomizer/Randomizer";
import { useLocalStorage } from "../Randomizer/CustomStorageAux";

export default function AllGenres() {
  const location = useLocation().state;
  const navigate = useNavigate();
  const [modal, setModal] = useState(location !== undefined && location !== null ? !location.modal : false);
  // eslint-disable-next-line no-unused-vars
  const [auxLocal, setAuxLocal] = useLocalStorage('auxiliarRandom', "")

  console.log(location)

  return (
    <>
        {
    (location !== undefined && location !== null)
      ? location.modal === modal
      ? <Randomizer modal={modal} setModal={setModal} keys={auxLocal} /> 
      : null 
      : null
    } 
    <div className="container">
      <Divisor title="ALL CATEGORIES"></Divisor>
      <div className="containerGenres ">
        {location.auxiliarKeys.map((element) => (
          <div
            className="type-container"
            key={element.id}
            onClick={() => {
              navigate(`/Genres/${element.name}/${element.id}`);
            }}
          >
            <img
              src={genres.src}
              height={250}
              width={160}
              alt="genre"
              className="image-genres"
            />
            <p className="centerGender big">{element.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
