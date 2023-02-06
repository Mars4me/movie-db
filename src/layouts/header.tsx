import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { mergeClassName } from './../utils';
import { IoIosSearch } from 'react-icons/io';

const MENU_CLASS = `
    p-1.5
    hover:bg-primary
    rounded-md
`;

const MENU_CLASS_ACTIVE = `
    bg-primary
`;

export const Header = () => {
    const location = useLocation();
    const [params, _] = useSearchParams();
    const navigate = useNavigate();

    const [pathname, setPathname] = useState('');
    const pathnameRef = useRef('');

    const [keyword, setKeyword] = useState('');
    const [isSearchFocus, setSearchFocus] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);

    const goToSearchPage = () => {
        if (keyword) {
            navigate(`/search?q=${keyword}`);
            setSearchFocus(false);
            searchRef.current?.blur();
        }
    };

    const initKeyword = () => (pathnameRef.current === '/search' ? setKeyword(params.get('q') || '') : setKeyword(''));

    const onWindowClick = () => {
        setSearchFocus(false);
        initKeyword();
    };

    const getMenuClass = (path: string) => {
        return path === pathname ? mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE) : mergeClassName(MENU_CLASS, '');
    };

    useEffect(() => {
        setPathname(location.pathname);
        pathnameRef.current = location.pathname;
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener('click', () => onWindowClick());
    }, []);

    return (
        <div className="bg-header">
            <Container className="flex justify-between">
                {/* logo & menu */}
                <menu className="flex items-center gap-6">
                    {/* logo */}
                    <h1 className="text-2xl font-semibold">
                        <Link to="/">MovieDB</Link>
                    </h1>
                    {/* menu */}
                    <div className="pt-1 flex items-center gap-1.5">
                        <Link className={getMenuClass('/movies')} to="/movies">
                            Movies
                        </Link>
                        <Link className={getMenuClass('/tv')} to="/tv">
                            TV
                        </Link>
                    </div>
                </menu>
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        goToSearchPage();
                    }}
                    className="border-b-[1.5px] border-white flex items-center p1 flex-[0.5] focus-within:border-primary"
                >
                    <input
                        onClick={(e) => {
                            e.stopPropagation();
                            setSearchFocus(true);
                        }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
                        value={keyword}
                        type="text"
                        className="bg-transparent outline-0 flex-1"
                        placeholder="Search..."
                    />
                    <button>
                        <IoIosSearch size={18} className="cursor-pointer" />
                    </button>
                </form>
            </Container>
        </div>
    );
};
