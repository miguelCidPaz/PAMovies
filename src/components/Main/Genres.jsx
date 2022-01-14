import React, {useState} from 'react';
import GenreType from './GenreType'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from 'react-router-dom'

export default function Genres(props) {
  
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    variableWidth: true,
    className: "gender-slider",
    focusOnSelect: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  return (<>
    <div className="row-container">
      <div>
        <p className='row-title'>ALL CATEGORY</p>
      </div>

      <Slider className="film-container" {...settings}>
        <div>
          <GenreType title={props.genres[0].title} theme={props.genres[0].src} gender_ID={props.genres[0].id}/>
        </div>
        <div>
          <GenreType title={props.genres[1].title} theme={props.genres[1].src} gender_ID={props.genres[1].id}/>
        </div>
        <div>
          <GenreType title={props.genres[2].title} theme={props.genres[2].src} gender_ID={props.genres[2].id}/>
        </div>
        <div>
          <GenreType title={props.genres[3].title} theme={props.genres[3].src} gender_ID={props.genres[3].id}/>
        </div>
        <div>
          <GenreType title={props.genres[4].title} theme={props.genres[4].src} gender_ID={props.genres[4].id}/>
        </div>
        <div>
          <GenreType title={props.genres[5].title} theme={props.genres[5].src} gender_ID={props.genres[5].id}/>
        </div>
        <div>
          <GenreType title={props.genres[6].title} theme={props.genres[6].src} gender_ID={props.genres[6].id} />
        </div>
      </Slider>
    </div>
  </>
  );
}

/*  return (<>
   <div className="row-container">
     <div>
       <p className='row-title'>TODAS LAS CATEGORÍAS</p>
     </div>

     <Slider className="film-container" {...settings}>
      
       {props.type.map((item) => (
         <div className="news-container" >
           <Film
             title={item.title}
             theme={item.src}
           />
         </div>
       ))}
     </Slider>
   </div>
 </>
 )
} */