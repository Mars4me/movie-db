import React, { useState, useEffect } from 'react';
import { Image } from '../components/Image';
import { Film } from '../interfaces';
import { Section } from '../components/Section';

export const Season = () => {
    const [film, setFilm] = useState<Film>({
        id: 0,
        mediaType: 'tv',
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

    const [episodes, setEpisodes] = useState<any[]>([]);

    const fetch = () => {
        const arrs: any[] = [];

        for (let i = 0; i < 12; i++) {
            arrs.push({});
        }
        setEpisodes(arrs);
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
            <Section className="-mt-[75px] flex items-center relative z-10 mobile:block">
                <Image
                    className="w-[150px] min-w-[150px] min-h-[200px] h-[200px] mobile:mx-auto"
                    src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
                />
                <div className="flex flex-col items-start gap-3 px-3">
                    <p className="text-xl line-clamp-1">{film.title}</p>
                    <p className="opacity-[0.8]">
                        <b>Season 1 </b> | {episodes?.length} episodes
                    </p>
                </div>
            </Section>
            {/* episodes */}
            <Section title="Episodes">
                {episodes.map((episode, index) => (
                    <div
                        className="flex items-stretch gap-4 px-3 my-6 overflow-hidden rounded-md cursor-pointer hover:bg-primary py-1.5"
                        key={index}
                    >
                        <Image src="" className="min-w-[300px] w-[300px] h-[300px]"></Image>
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-lg truncate">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor
                                reprehenderit perspiciatis, omnis optio saepe, nesciunt non repellendus
                                consequatur animi quaerat. Cupiditate, unde? Commodi, quidem?
                            </p>
                            <p className="opacity-[0.9] line-clamp-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat
                                iusto suscipit? Iusto illo voluptas iure similique praesentium minus
                                accusantium nesciunt, qui consectetur omnis cumque.
                            </p>
                            <div className="pt-3 mt-auto text-right">22 November 2022</div>
                        </div>
                    </div>
                ))}
            </Section>
        </>
    );
};
