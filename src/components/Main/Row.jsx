import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import { createContext, useState, useContext } from 'react';
import Film from './Film'
import { genders, images } from './data-main';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Row(props) {
  const [settings, setSettings] = useState(
    {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
    });

  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState();


  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    if (width <= 550) {
      setMobile(true);
      setSettings({ slidesToShow: 2, arrows: false })

    }
    else {

      setMobile(false);
      setSettings({ slidesToShow: 5, arrows: true })

    }

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [width])

  console.log(settings)
  return (<>
    <div className="row-container">
      <div className='title-container'>
        <p>{props.title}</p>
      </div>
      <Slider className="film-container" {...settings}>
        <div>
          <Film image={images[0].src} />
        </div>
        <div>
          <Film image={images[1].src} />
        </div>
        <div>
          <Film image={images[2].src} />
        </div>
        <div>
          <Film image={images[3].src} />
        </div>
        <div>
          <Film image={images[4].src} />
        </div>
        <div>
          <Film image={images[5].src} />
        </div>
        <div>
          <Film image={images[6].src} />
        </div>
      </Slider>
    </div>
  </>
  )

} export default Row