import { useState, useEffect } from 'react';
import { Film } from './../interfaces';
import { Image } from './Image';

interface SearchResultProps {
    keyword: string;
    goToSearchPage: Function;
}

export const SearchResult = (props: SearchResultProps) => {
    const [items, setItems] = useState<Film[]>([]);
    const [totalItem, setTotalItem] = useState<Film[]>([]);

    const fetch = () => {
        const arrs: Film[] = [];

        for (let i = 0; i < 6; i++) {
            arrs.push({
                id: i,
                mediaType: 'tv',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ducimus.',
                description: '',
                coverPath: '',
                posterPath: '',
                genreIds: [1, 2, 3, 4, 5, 6],
                seasons: [],
            });
        }
        setTotalItem(arrs);
        setItems(arrs.slice(0, 5));
    };
    useEffect(() => {
        fetch();
    }, [props.keyword]);
    return (
        <div className="absolute top-[48px] left-0 right-0 rounded-md overflow-auto bg-header max-h-[480px] shadow-lg">
            {items.map((film, index) => (
                <div
                    className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer "
                    key={index}
                >
                    {/* image */}
                    <Image src="" className="h-[72px] min-w-[102px] w-[102px] rounded-md" />
                    {/* title and genre */}
                    <div className="px-3 truncate">
                        <p className="text-base truncate">{film.title}</p>
                        <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
                            {film.genreIds.map((id, i) => (
                                <li key={i}>{i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            {totalItem.length > items.length && (
                <button
                    onClick={() => props.goToSearchPage()}
                    className="p-3 py-1.5 mt-2 bg-primary w-full hover:text-body sticky bottom-0 shadow-lg -mb-3 "
                >
                    More results
                </button>
            )}
        </div>
    );
};
