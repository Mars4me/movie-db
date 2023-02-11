import axios, { AxiosResponse } from 'axios';
import { MediaType } from '../types';
import { formatResult } from '../utils';
import { IFilm } from './../interfaces';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_TMDB_API_URL,
});

axiosClient.interceptors.request.use((config) => {
    return {
        ...config,
        params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'uk',
        },
    };
});

export const getPremiers = async (mediaType: MediaType): Promise<IFilm[]> => {
    try {
        const { data } = await axiosClient.get<
            any,
            AxiosResponse<{
                results: unknown[];
            }>
        >(`/trending/${mediaType}/week`);

        return data.results.map((value) => formatResult(mediaType, value));
    } catch (error) {
        console.error(error);
    }
    return [];
};

export const getInTheaters = async (): Promise<IFilm[]> => {
    try {
        const { data } = await axiosClient.get<
            any,
            AxiosResponse<{
                results: unknown[];
            }>
        >(`/movie/now_playing`);

        return data.results.map((value) => formatResult('movie', value));
    } catch (error) {
        console.error(error);
    }
    return [];
};
