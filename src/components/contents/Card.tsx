import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import style from './styles/style.module.scss';
import { POPULAR_FILMS, IMAGE_URL, MOVIE_ID, KEY, LANGUAGE, PAGE } from '../../constants/Constants';
import { IMovieProps } from '../../Interfaces/IProps';
import { DarkModeContext } from '../../contexts/ThemeContext';

export const Card: React.FC = () => {

    const { mode } = useContext(DarkModeContext);
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

    return (
        <main className={style.container} style={{ background: mode['--black'] }}>
            <div className={style.listOfMovies}>
                {state.map(({ id, original_title, overview, poster_path, release_date, vote_average }) => {
                    return (
                        <div key={id} className={style.wrapper} style={{ background: mode['--black'] }}>
                            <div className={style.content}>
                                <img src={`${IMAGE_URL}` + poster_path} alt={original_title} className={style.img} />
                                <div style={{ color: mode['--light'] }}>
                                    <h5 className={style.original_title}>{original_title}</h5>
                                    <i className={style.overview} style={{ color: mode['--light'] }}>{overview}</i>
                                </div>
                            </div>
                            <h4 className={style.release_date} style={{ color: mode['--light'] }}>{`Release ${release_date}`}</h4>
                            <h5 className={style.rating} style={{ color: mode['--light'] }}>{`Rating ${vote_average}`}</h5>
                        </div>
                    )
                })}
            </div>
        </main>
    );
}