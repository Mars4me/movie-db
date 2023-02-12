import { ReactNode } from 'react';
import { MediaType } from './types';

export interface CustomCopmonentProps {
    children?: ReactNode;
    className?: string;
}

export interface Season {
    id: number;
    seasonNumber: number;
}

export interface IFilm {
    id: number;
    mediaType: MediaType;
    title: string;
    description: string;
    posterPath: string;
    coverPath: string;
    genreIds: number[];
    seasons: Season[];
}

export interface Cast {
    id: number;
    name: string;
    characterName: string;
}

export interface Trailer {
    id: number;
    key: string;
}

/*add new field to Window object.*/
// declare global {
//     interface Window {
//         mousePosition: number;
//     }
// }
