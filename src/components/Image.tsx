import React from 'react';
import { CustomCopmonentProps } from './../interfaces';
import { mergeClassName } from './../utils';

interface ImageProps extends CustomCopmonentProps {
    src: string;
}

export const Image = (props: ImageProps) => {
    return (
        <div className={mergeClassName('bg-primary h-full w-full', props.className)}>
            <img src={props.src} alt="movie-avatar" className="w-full h-full" />
        </div>
    );
};
