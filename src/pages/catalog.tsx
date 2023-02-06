import React from 'react';
import { MediaType } from '../types';
import { CustomCopmonentProps } from './../interfaces';

interface CatalogProps extends CustomCopmonentProps {
    type: MediaType | 'search';
}

export const Catalog: React.FC<CatalogProps> = (props) => {
    return <div>{props.type}</div>;
};
