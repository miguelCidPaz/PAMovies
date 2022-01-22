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
    data.cast?.slice(0, 4).map((element) =>
      itemArr.push({
        id: element.id,
        picture: link + element.profile_path,
        item: element.known_for_department,
        name: element.name,
      })
    );
    data.crew?.slice(0, 4).map((element) =>
      itemArr.push({
        id: element.id,
        picture: link + element.profile_path,
        item: element.known_for_department,
        name: element.name,
      })
    );
    setIems(itemArr);
  }, [data]);

  return (
    <>
      <Cast element={item} title="CAST"></Cast>
      {/* {console} */}
    </>
  );
};
export default LogicCast;
