import { IoMdFastforward } from 'react-icons/io';
import { IFilm } from './interfaces';
import { MediaType } from './types';

export const mergeClassName = (firstValue: string, secondValue?: string) => {
    return firstValue + ' ' + (secondValue || '');
};

export const formatResult = (mediaType: MediaType, obj: any): IFilm => {
    return {
        id: obj.id,
        title: obj.title || obj.name,
        description: obj.overview,
        coverPath: obj.backdrop_path,
        posterPath: obj.poster_path,
        genreIds: obj.genre_ids || [],
        mediaType,
        seasons: obj.seasons || [],
    };
};

export const isFilm = (film: any): film is IFilm => {
    return (film as IFilm) !== undefined;
};

export const tmbdImageSrc = (path: string) => {
    if (!path) return '';
    return `https://image.tmdb.org/t/p/original/${path}`;
};

export const tmbdPosterSrcLowResolution = (path: string) => {
    if (!path) return '';
    return `https://image.tmdb.org/t/p/w342/${path}`;
};
