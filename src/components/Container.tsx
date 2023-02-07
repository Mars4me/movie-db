import React from 'react';
import { CustomCopmonentProps } from '../interfaces';
import { mergeClassName } from '../utils';

export const Container = (props: CustomCopmonentProps) => {
    return (
        <div className={mergeClassName('px-6 py-3 max-w-screen-lg mx-auto', props.className)}>
            {props.children}
        </div>
    );
};
