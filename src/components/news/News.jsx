import axios from "axios";
import React, { useState, useEffect } from "react";
import Divisor from "../Divisor/Divisor";

export default function News() {
  const [data, setData] = useState([]);
  let logo = "https://logo.clearbit.com/";

  // useEffect(() => {
  async function fecthData() {
    try {
      var options = {
        method: "GET",
        url: "https://api.newscatcherapi.com/v2/search",
        params: {
          q: "movie",
          lang: "en",
          sort_by: "relevancy",
          page: "1",
          sources: "rottentomatoes.com,cnn.com,nytimes.com",
        },
        headers: {
          "x-api-key": "etTuYg-LShcP5DtU53WYMflslh8eCJe99DiKGl09lro",
        },
      };
      const getData = await axios.request(options);

      setData(getData.data.articles);
    } catch (error) {
      console.log(error);
    }
  }
  // fecthData();
  // }, []);
  // console.log(data);
  return (
    <div className="container">
      <button onClick={fecthData}>try</button>
      <Divisor title="NEWS"></Divisor>
      <div className="container-news">
        {data?.slice(0, 3).map((element, key) => {
          {
            console.log(element);
          }
          return (
            <div key={key} className="news">
              <a href={element.link} target="_blank">
                <div className="container-content">
                  <img className="img-news" src={element.media} alt="" />
                  <div className="shadow"></div>
                  <p className="date-news">
                    {element.published_date.slice(0, 9)}
                  </p>
                  <h3 className="title-news">{element.title}</h3>
                  <div>
                    <img
                      className="logo-news"
                      src={`${logo}${element.clean_url}`}
                    ></img>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// `https://newsapi.org/v2/everything?popularity&q=movie&language=en&from=2022-01-13&to=2022-01-15&sortBy=publishedAt&apiKey=8a57f5f9c91040eda543c4c779c1512c`

// {status: 'ok', total_hits: 10000, page: 1, total_pages: 200, page_size: 50, …}
// articles: Array(50)
// 0:
// author: "Adam Ali"
// authors: []
// clean_url: "ipsnews.net"
// country: "unknown"
// excerpt: "As we all know that, the world has been moving to the future at a very fast speed only because of technology. A few years ago, the way of getting entertainment was very simple and difficult. Now at…"
// is_opinion: false
// language: "en"
// link: "https://ipsnews.net/business/2022/01/10/what-are-the-advantages-of-online-movies-youtube-alternative-2022"
// media: null
// published_date: "2022-01-10 16:21:12"
// published_date_precision: "full"
// rank: 3972
// rights: null
// summary: "As we all know that, the world has been moving to the future at a very fast speed only because of technology. A few years ago, the way of getting entertainment was very simple and difficult. Now at the present times, it becomes much easier for everyone to get entertainment. Here in this article, we will discuss about getting entertainment by watching movies.\nA few years ago, people have to go to cinemas for watching movies but at present, people can enjoy movies at their own homes on different platforms like YouTube."
// title: "What are the advantages of online movies Youtube Alternative 2022"
// topic: "news"
// twitter_account: null
// _id: "1fc64c7f99de7cfc4e21cba650230155"
// _score: 8.910929
