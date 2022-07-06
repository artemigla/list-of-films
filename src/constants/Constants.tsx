import { ITheme } from "../Interfaces/IProps"
import { Color } from "../models/color.model"

export const POPULAR_FILMS = 'https://api.themoviedb.org/3/movie/'
export const MOVIE_ID = 'popular'
export const KEY = 'c8b12b87395ea395f7a50b6f6f398e58'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
export const LANGUAGE = 'en-US'
export const PAGE = 1

export const SETTINGS = {
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 3000,
}

export const LIGHT_THEME: ITheme = {
    "--light": Color.BLACK_COLOR,
    "--black": Color.WHITE_COLOR,
    "--background": Color.BACKGROUND,
    isDark: false,
};

export const DARK_THEME: ITheme = {
    "--light": Color.WHITE_COLOR,
    "--black": Color.BLACK_COLOR,
    "--background": Color.BACKGROUND,
    isDark: true,
};