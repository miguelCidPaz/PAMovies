import CustomButton from "./CustomButton";

export default function settingsSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 1,

        className: "omnibar--class-slider",
        nextArrow: <CustomButton value={true} className='omnibar--back-arrow' />, //Cambiar
        prevArrow: <CustomButton value={false} className='omnibar--next-arrow' />, //Cambiar
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "80px",
                },
            },
        ],
    };

    return settings
}