import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Catalog } from '../pages/catalog';
import { Film } from '../pages/film';
import { Home } from '../pages/home';

export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Catalog type="movie" />} />
            <Route path="/tv" element={<Catalog type="tv" />} />
            <Route path="/search" element={<Catalog type="search" />} />
            <Route path="/tv/:id" element={<Film mediaType="tv" />} />
            <Route path="/movie/:id" element={<Film mediaType="movie" />} />
        </Routes>
    );
};
