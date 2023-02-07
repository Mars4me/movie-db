import React from 'react';
import { Image } from './Image';
import { CustomCopmonentProps, Film } from './../interfaces';
import { useNavigate } from 'react-router-dom';

interface CardProps extends CustomCopmonentProps {
    film: Film;
}

export const Card = (props: CardProps) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/${props.film.mediaType}/${props.film.id}`)}
            className="mx-3 my-1.5 cursor-pointer"
        >
            <Image className="h-[200px]" src="" />
            <p className="py-1.5 line-clamp-2">{props.film.title}</p>
        </div>
    );
};
