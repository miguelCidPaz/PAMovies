import { elementTypeAcceptingRef } from "@mui/utils";
import axios from "axios";
import react, { useState, useEffect } from "react";
import Cast from "../cast/Cast";

const LogicCast = (props) => {
  const [data, setData] = useState("");
  const [item, setIems] = useState([""]);
  let id = props.id;
  let link = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const fetchData = async () => {
      try {
        let getData = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US`
        );
        setData(getData.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props]);
  useEffect(() => {
    let itemArr = [];
    data.cast?.slice(0, 4).map((element) => {
      itemArr.push({
        id: element.id,
        picture: link + element.profile_path,
        item: element.known_for_department,
        name: element.name,
      });
    });

    data.crew?.slice(0, 6).map((element) => {
      itemArr.push({
        id: element.id,
        picture: link + element.profile_path,
        item: element.known_for_department,
        name: element.name,
      });
    });
    //con esta funcion recorro el array final y descarto las personas duplicadas que suele enviar la api
    const duplicatePersons = (arr) => {
      const duplicate = arr.map((person) => {
        return [person.name, person]; // Pares de clave y valor
      });

      return [...new Map(duplicate).values()]; // Conversión a un array
    };

    setIems(duplicatePersons(itemArr));
  }, [data]);

  return (
    <>
      <Cast element={item} title="CAST"></Cast>
    </>
  );
};
export default LogicCast;
