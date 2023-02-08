import React from 'react';
import { Image } from './Image';
import { CustomCopmonentProps } from './../interfaces';
import { useNavigate } from 'react-router-dom';

interface CardProps extends CustomCopmonentProps {
    imageSrc: string;
    title: string;
    onClick?: Function;
}

export const Card = (props: CardProps) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => (props?.onClick ? props.onClick() : '')} className="mx-3 my-1.5 cursor-pointer">
            <Image className="h-[200px] min-h-[200px]" src="" />
            <p className="py-1.5 line-clamp-2">{props.title}</p>
        </div>
    );
};
