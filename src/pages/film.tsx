import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { Slider } from '../components/slider/Slider';
import { MediaType } from '../types';
import { Image } from './../components/Image';
import { Cast, Trailer, IFilm } from './../interfaces';

interface FilmProps {
    mediaType: MediaType;
}
export const Film = (props: FilmProps) => {
    const navigate = useNavigate();
    const { params } = useParams();
    const [film, setFilm] = useState<IFilm>({
        id: 0,
        mediaType: props.mediaType,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.??????',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.',
        coverPath: '',
        posterPath: '',
        genreIds: [1, 2, 3, 4],
        seasons: [
            {
                id: 1,
                seasonNumber: 1,
            },
            {
                id: 2,
                seasonNumber: 2,
            },
            {
                id: 3,
                seasonNumber: 3,
            },
        ],
    });
    const [casts, setCasts] = useState<Cast[]>([]);
    const [trailers, setTrailers] = useState<Trailer[]>([]);
    const [recomendations, setRecomendations] = useState<IFilm[]>([]);

    const fetch = () => {
        const arrs: any[] = [];

        for (let i = 0; i < 20; i++) {
            arrs.push({});
        }
        setCasts(arrs);
        setTrailers(arrs);
        setRecomendations(arrs);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            {/* background */}
            <div className="h-[200px] left-0 right-0 top-0 relative">
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
            <Section title="Casts" className="">
                <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
                    <div className="flex items-center gap-3">
                        {casts.map((cast, index) => (
                            <div className="my-3 w-[200px] flex-shrink-0" key={index}>
                                <Card
                                    imageSrc=""
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing eli"
                                ></Card>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            {/* trailers */}
            <Section title="Trailers" className="">
                <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
                    <div className="flex items-center gap-3">
                        {trailers.map((trailer, index) => (
                            <div className="my-3 w-[200px] flex-shrink-0" key={index}>
                                <Card
                                    imageSrc=""
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing eli"
                                ></Card>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            {/* seasons */}
            <Section title="Seasons">
                <Slider slidesToShow={2} slidesToScroll={2} swipe={false}>
                    {(_) =>
                        film.seasons.map((season, id) => (
                            <Card
                                onClick={() => navigate(`/tv/${film.id}/season/${season.seasonNumber}`)}
                                imageSrc={''}
                                title={`Season ${season.seasonNumber}`}
                                key={id}
                            ></Card>
                        ))
                    }
                </Slider>
            </Section>
            {/* recomendations */}
            <Section title="Recomendations">
                <Slider isMovieCard={true} autoplay={true}>
                    {(_) =>
                        recomendations.map((film, id) => (
                            <Card imageSrc={film.posterPath} title={film.title} key={id}></Card>
                        ))
                    }
                </Slider>
            </Section>
        </>
    );
};
