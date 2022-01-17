import { handleBreakpoints } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cast from "../cast/Cast";

const BirthdayPeople = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  let link = "https://image.tmdb.org/t/p/w500";
  var options = {
    method: "GET",
    url: "https://celebrity-bucks.p.rapidapi.com/birthdays/JSON",
    headers: {
      "x-rapidapi-host": "celebrity-bucks.p.rapidapi.com",
      "x-rapidapi-key": "7f4aee9aedmsh157cb8d21c481acp1acd25jsnd51dd7c23532",
    },
  };
  useEffect(() => {
    const axiosData = async () => {
      const getData = await axios.request(options);

      setData(getData.data.Birthdays);
    };

    axiosData();
  }, []);

  useEffect(() => {
    let itemData = [];
    data.map((element) => {
      const axiosData = async () => {
        const getData = await axios.get(
          `https://api.themoviedb.org/3/search/person?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=en-US&query=${element.name}&page=1&include_adult=false`
        );

        itemData.push({
          picture: link + getData.data.results[0].profile_path,
          item: element.dob,
          name: getData.data.results[0].name,
        });
        setItem([itemData]);
      };

      axiosData();
    });
  }, [data]);

  return (
    <>
      {/* {console.log(item[0])} */}
      {/* <button onClick={axiosData}>rewrer</button> */}
      <Cast element={item[0]}></Cast>
    </>
  );
};

export default BirthdayPeople;
