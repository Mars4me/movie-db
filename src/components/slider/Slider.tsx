import './slider.css';
import Slick, { Settings } from 'react-slick';

interface SliderProps extends Settings {
    isMovieCard?: boolean;
}

export const Slider = (props: SliderProps) => {
    let settings: Settings = {
        ...props,
    };

    if (props.isMovieCard) {
        settings = {
            ...settings,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipe: false,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
            ],
        };
    }

    return (
        <Slick {...settings} autoplaySpeed={5000}>
            {props.children}
        </Slick>
    );
};
