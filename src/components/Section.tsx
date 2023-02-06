import React from 'react';
import { CustomCopmonentProps } from '../interfaces';
import { Container } from './Container';

interface SectionProps extends CustomCopmonentProps {
    title?: string;
}

export const Section = (props: SectionProps) => {
    return (
        <Container className={props.className}>
            {props.title && <h1 className="text-xl px-6 py-1.5"> {props.title}</h1>}
            {props.children}
        </Container>
    );
};
