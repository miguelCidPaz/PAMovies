import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Prueba() {
  const [data, setData] = useState();
  async function axio() {
    const getData = await axios.get(
      `https://newsapi.org/v2/everything?popularity&q=movie&language=en&from=2022-01-13&to=2022-01-15&sortBy=publishedAt&apiKey=8a57f5f9c91040eda543c4c779c1512c`
    );
    setData(getData.data);
  }
  useEffect(() => {
    data.articles.map((element) => console.log(element.content));
  }, [data]);

  return (
    <>
      <button onClick={axio}>try</button>
      {data.articles.map((element) => {
        return <p>{element.content.slice(0, 200)}</p>;
      })}
    </>
  );
}
