import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '../components/Section';
import { MediaType } from '../types';
import { Image } from './../components/Image';
import { Film as FilmType } from './../interfaces';

interface FilmProps {
    mediaType: MediaType;
}
export const Film = (props: FilmProps) => {
    const { params } = useParams();
    const [film, setFilm] = useState<FilmType>({
        id: 0,
        mediaType: props.mediaType,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.??????',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.',
        coverPath: '',
        posterPath: '',
        genreIds: [1, 2, 3, 4, 5, 6],
        seasons: [],
    });
    return (
        <>
            {/* background */}
            <div className="h-[300px] left-0 right-0 top-0">
                <div className="overlay-film-cover"></div>
                <Image src=""></Image>
            </div>
            {/* poster and text */}
            <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
                <Image
                    className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto"
                    src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
                />
                <div className="flex flex-col items-start gap-3 px-3">
                    <p className="text-xl line-clamp-1">{film.title}</p>
                    <ul className="flex items-center gap-3">
                        {film.genreIds.map((genre, index) => (
                            <li className="px-3 py-1.5 bg-primary rounded-lg text-sm" key={index}>
                                item {index}
                            </li>
                        ))}
                    </ul>
                    <p className="line-clamp-3 opacity-[0.8]">{film.description}</p>
                </div>
            </Section>
            {/* cast */}
            {/* trailers */}
            {/* seasons */}
            {/* recomendations */}
        </>
    );
};
