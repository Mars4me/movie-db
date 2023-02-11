import { Section } from '../components/Section';
import { Slider } from './../components/slider/Slider';
import { useState, useEffect } from 'react';
import { IFilm } from '../interfaces';
import { PremiereHero } from './../components/PremiereHero';
import { Card } from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { getInTheaters, getPremiers } from './../api/theMovieDataBaseAPI';
import { isFilm, tmbdImageSrc, tmbdPosterSrcLowResolution } from './../utils';

export const Home = () => {
    const navigate = useNavigate();

    const [trendings, setTrendings] = useState<IFilm[]>([]);
    const [inTheaters, setInTheaters] = useState<IFilm[]>([]);

    const fetchInTheaters = async () => {
        setInTheaters(await getInTheaters());
    };

    const fetchTrending = async () => {
        const movies = await getPremiers('movie');
        const tvs = await getPremiers('tv');

        const arrs: IFilm[] = [];

        for (let index = 0; index < 6; index++) {
            let film: unknown;
            const movieElement = movies[index - 1];
            const tvsElement = tvs[index - 1];

            if (index % 2 === 1) {
                if (tvsElement) film = tvsElement;
            } else {
                if (movieElement) film = tvsElement;
            }
            if (isFilm(film)) arrs.push(film);
        }
        setTrendings(arrs);
    };

    useEffect(() => {
        fetchTrending();
        fetchInTheaters();
    }, []);

    return (
        <>
            {/* premiere */}
            <Section className="py-0">
                <Slider className="slick-hero" autoplay={true} slidesToShow={1} slidesToScroll={1}>
                    {(onSwipe) =>
                        trendings.map((film, id) => (
                            <PremiereHero
                                onClick={() => (!onSwipe ? navigate(`/${film.mediaType}/${film.id}`) : '')}
                                film={film}
                                key={id}
                            ></PremiereHero>
                        ))
                    }
                </Slider>
            </Section>
            {/* in theaters */}
            <Section title="In Theaters">
                <Slider isMovieCard={true} autoplay={true} slidesToShow={5} slidesToScroll={5}>
                    {(_) =>
                        inTheaters.map((film, id) => (
                            <Card
                                imageSrc={tmbdPosterSrcLowResolution(film.posterPath)}
                                title={film.title}
                                key={id}
                            ></Card>
                        ))
                    }
                </Slider>
            </Section>
            {/* popular */}
            {/* best choice TV*/}
            {/* best choice movies*/}
        </>
    );
};
