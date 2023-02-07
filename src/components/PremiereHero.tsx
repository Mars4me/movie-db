import React from 'react';
import { Film } from '../interfaces';
import { Image } from './Image';
import { MdPlayCircleOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface PremiereHeroProps {
    film: Film;
}
export const PremiereHero = (props: PremiereHeroProps) => {
    const navigate = useNavigate();

    return (
        <div
            className="h-[300px] relative flex items-center cursor-pointer"
            onClick={() => navigate(`/${props.film.mediaType}/${props.film.id}`)}
        >
            {/* bg image */}
            <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="overlay-slick-hero"></div>
                <Image src=""></Image>
            </div>
            {/* about */}
            <div className="flex flex-col gap-3 items-start relative z-10 mx-[55px] max-w-[50%] mobile:max-w-[100%]">
                <p className="text-xl line-clamp-1">{props.film.title}</p>
                <p className="text-sm line-clamp-3">{props.film.description}</p>
                <button className="px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md">
                    <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                    <span>Play trailers</span>
                </button>
            </div>
        </div>
    );
};
