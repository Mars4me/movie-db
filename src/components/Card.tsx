import React from 'react';
import { Image } from './Image';
import { CustomCopmonentProps, Film } from './../interfaces';

interface CardProps extends CustomCopmonentProps {
    film: Film;
}

export const Card = (props: CardProps) => {
    return (
        <div className="mx-3 my-1.5">
            <Image className="h-[200px]" src="" />
            <p className="py-1.5 line-clamp-2">{props.film.title}</p>
        </div>
    );
};
