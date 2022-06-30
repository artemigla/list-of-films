import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { POPULAR_FILMS, IMAGE_URL, MOVIE_ID, KEY, LANGUAGE, PAGE } from '../Constants/Constants';
import { IMovieProps } from '../Interfaces/IMovieProps';

export const MovieListDisplay: React.FC = () => {
    const [state, setState] = useState<IMovieProps[]>([]);

    const GetAListOfMovies = async () => {
        try {
            await axios.get(`${POPULAR_FILMS}${MOVIE_ID}?api_key=${KEY}&language=${LANGUAGE}&page=${PAGE}`)
                .then(response => response.data)
                .then(response => setState(response.results))
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        GetAListOfMovies()
    }, []);

    const ItemList = state.map(({ id, original_title, overview, poster_path, release_date, vote_average }) => {
        return (
            <div key={id}>
                <img src={`${IMAGE_URL}` + poster_path} alt={original_title} style={{ width: 210, height: 300 }} />
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