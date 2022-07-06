import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'
import axios from 'axios';
import style from './styles/style.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMovieProps } from '../../Interfaces/IProps';
import { POPULAR_FILMS, MOVIE_ID, KEY, LANGUAGE, PAGE, IMAGE_URL, SETTINGS } from '../../constants/Constants';

export const Slide: React.FC = () => {
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
        <div className={style.container}>
            <Slider {...SETTINGS}>
                {state.map(({ id, poster_path, original_title }) => (
                    <div key={id}>
                        <img src={`${IMAGE_URL}` + poster_path} alt={original_title} className={style.img} />
                    </div>
                )).reverse()}
            </Slider>
        </div>
    )
}