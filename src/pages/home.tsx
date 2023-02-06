import { Section } from '../components/Section';
import { Slider } from './../components/slider/Slider';
import { useState, useEffect } from 'react';
import { Film } from '../interfaces';
import { PremiereHero } from './../components/PremiereHero';

export const Home = () => {
    const [trendings, setTrendings] = useState<Film[]>([]);

    const fetchPremiere = () => {
        const arrs: Film[] = [];

        for (let i = 0; i < 6; i++) {
            arrs.push({
                id: i,
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
    };

    useEffect(() => {
        fetchPremiere();
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
            {/* popular */}
            {/* best choice TV*/}
            {/* best choice movies*/}
        </>
    );
};
