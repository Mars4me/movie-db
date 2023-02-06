import React from 'react';
import { CustomCopmonentProps } from './../interfaces';
import { mergeClassName } from './../utils';

interface ImageProps extends CustomCopmonentProps {
    src: string;
}

export const Image = (props: ImageProps) => {
    return <div className={mergeClassName('bg-primary', props.className)}>Image</div>;
};
