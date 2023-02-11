import React from 'react';
import { IFilm } from '../interfaces';
import { Image } from './Image';
import { MdPlayCircleOutline } from 'react-icons/md';
import { tmbdImageSrc } from '../utils';

interface PremiereHeroProps {
    film: IFilm;
    onClick: () => void;
}
export const PremiereHero = (props: PremiereHeroProps) => {
    return (
        <div className="h-[450px] relative flex items-center cursor-pointer" onClick={() => props.onClick()}>
            {/* bg image */}
            <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="overlay-slick-hero overlay-film-cover"></div>
                <Image src={tmbdImageSrc(props.film.coverPath)}></Image>
            </div>
            {/* about */}
            <div
                className="flex flex-col gap-3 items-start relative z-10 mx-[55px] max-w-[50%] mobile:max-w-[100%] cursor-default"
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <p className="text-xl line-clamp-1">{props.film.title}</p>
                <p className="text-sm line-clamp-3">{props.film.description}</p>
                <button
                    className="px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md"
                    onClick={() => props.onClick()}
                >
                    <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                    <span>Play trailers</span>
                </button>
            </div>
        </div>
    );
};
