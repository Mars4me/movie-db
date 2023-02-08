import React, { useState, useEffect } from 'react';
import { MediaType } from '../types';
import { CustomCopmonentProps, IFilm } from './../interfaces';
import { Image } from './../components/Image';
import { Section } from '../components/Section';
import { useSearchParams } from 'react-router-dom';
import { Card } from './../components/Card';

interface CatalogProps extends CustomCopmonentProps {
    type: MediaType | 'search';
}

export const Catalog: React.FC<CatalogProps> = (props) => {
    let title = '';

    const [films, setFilms] = useState<IFilm[]>([]);
    const [params, _] = useSearchParams();

    switch (props.type) {
        case 'movie':
            title = 'Movies';
            break;
        case 'tv':
            title = 'TV';
            break;
        case 'search':
            title = `Search results for <i>${params.get('q')}</i>`;
            break;
        default:
            break;
    }

    const fetch = () => {
        const arrs: any[] = [];

        for (let i = 0; i < 20; i++) {
            arrs.push({
                title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, maxime.',
            });
        }
        setFilms(arrs);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            {/* background */}
            <div className="h-[120px] left-0 right-0 top-0 relative">
                <div className="overlay-film-cover"></div>
                <div className="w-full h-full bg-primary"></div>
                <Image src=""></Image>
            </div>
            {/* PAGE TITLE */}
            <Section title={title} className="-mt-[90px] flex items-center relative z-10"></Section>
            {/* Films */}
            <Section>
                <div className="relative grid lg:grid-cols-4 sm:grid-cols-3 mobile:grid-cols-2 z-[11]">
                    {films.map((film, index) => (
                        <div key={index}>
                            <Card imageSrc="" title={film.title} />
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
};
