import { Section } from '../components/Section';
import { Slider } from './../components/slider/Slider';
import { useState, useEffect } from 'react';
import { Film } from '../interfaces';
import { PremiereHero } from './../components/PremiereHero';
import { Card } from '../components/Card';

export const Home = () => {
    const [trendings, setTrendings] = useState<Film[]>([]);
    const [inTheaters, setInTheaters] = useState<Film[]>([]);

    const fetch = () => {
        const arrs: Film[] = [];

        for (let i = 0; i < 6; i++) {
            arrs.push({
                id: i,
                mediaType: 'tv',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.??????',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.',
                coverPath: '',
                posterPath: '',
                genreIds: [1, 2, 3, 4, 5, 6],
                seasons: [],
            });
        }
        setTrendings(arrs);
        setInTheaters(arrs);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            {/* premiere */}
            <Section className="py-0">
                <Slider className="slick-hero" autoplay={true} slidesToShow={1} slidesToScroll={1}>
                    {trendings.map((film, id) => (
                        <PremiereHero film={film} key={id}></PremiereHero>
                    ))}
                </Slider>
            </Section>
            {/* in theaters */}
            <Section title="In Theaters">
                <Slider isMovieCard={true} autoplay={true} slidesToShow={5} slidesToScroll={5}>
                    {inTheaters.map((film, id) => (
                        <Card film={film} key={id}></Card>
                    ))}
                </Slider>
            </Section>
            {/* popular */}
            {/* best choice TV*/}
            {/* best choice movies*/}
        </>
    );
};
