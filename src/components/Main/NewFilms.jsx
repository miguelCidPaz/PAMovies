import React from "react";
import Slider from "react-slick";
import Film from "./Film";

export default function NewFilms(props) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        arrows: true,
        variableWidth: true,
        focusOnSelect: true,
        className: "news-slider",
        slidesPerRow: 3,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesPerRow: 1,
                }
            }
        ]
    };

    return (<>

        <Slider {...settings}>
           
            {props.data.map((item) => (
                <div className="news-container" >
                    <Film
                        img={item.poster_path}
                        title={item.title}
                        overview={item.overview}
                        date={item.release_date}
                        puntuation={item.vote_average}
                    />
                </div>
            ))}
        </Slider>
    </>
    )
}



