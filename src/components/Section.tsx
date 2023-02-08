import React from 'react';
import { CustomCopmonentProps } from '../interfaces';
import { Container } from './Container';

interface SectionProps extends CustomCopmonentProps {
    title?: string;
}

export const Section = (props: SectionProps) => {
    return (
        <Container className={props.className}>
            {props.title && (
                <h1
                    className="px-3 py-2 text-xl"
                    dangerouslySetInnerHTML={{
                        __html: props.title,
                    }}
                ></h1>
            )}
            {props.children}
        </Container>
    );
};
