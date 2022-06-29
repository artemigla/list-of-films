import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { POPULAR_FILMS, KEY, LANGUAGE, PAGE } from '../Constants/Constants';

interface MovieListDisplayProps {
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}

export const MovieListDisplay: React.FC = () => {
    const [state, setState] = useState<MovieListDisplayProps[]>([]);
    const GetAListOfMovies = async () => {
        await axios.get(`${POPULAR_FILMS}${KEY}&${LANGUAGE}&page=${PAGE}`)
            .then(response => response.data)
            .then(response => setState(response.results))
            .catch(err => alert(err));
    }

    useEffect(() => {
        GetAListOfMovies()
    }, []);

    const ItemList = state.map(({ id, original_title, overview, poster_path, release_date, vote_average }) => {
        return (
            <div key={id}>
                <img src={poster_path} alt="" style={{ width: 120, height: 120 }} />
                <h5>{original_title}</h5>
                <i>{overview}</i>
                <h6>{release_date}</h6>
                <h5>{vote_average}</h5>
            </div>
        )
    })
    return (
        <div>
            {ItemList}
        </div>
    );
}