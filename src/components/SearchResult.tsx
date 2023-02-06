import { useState } from 'react';
import { Film } from './../interfaces';

interface SearchResultProps {
    keyword: string;
    goToSearchPage: Function;
}

export const SearchResult = (props: SearchResultProps) => {
    const [items, setItems] = useState<Film[]>();
    const fetch = () => {
        const arrs: Film[] = [];

        for (let i = 0; i < 5; i++) {
            arrs.push({
                id: 1,
                title: '',
                description: '',
                coverPath: '',
                posterPath: '',
                genreIds: [],
                seasons: [],
            });
        }
    };
    return (
        <div className="absolute top-0 left-0 right-0 rounded-md overflow-hidden">
            {items?.map((film, index) => (
                <div className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer" key={index}>
                    {/* image */}
                    {/* title and genre */}
                </div>
            ))}
        </div>
    );
};
