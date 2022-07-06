import { Color } from "../models/color.model";

export interface IMovieProps {
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}

export interface ITheme {
    '--light': Color;
    '--black': Color;
    '--background': Color;
    isDark: boolean;
}

export interface IDarkModeContext {
    mode: ITheme;
    dispatch: React.Dispatch<any>;
}

export interface InputProps {
    theme: ITheme;
    onChange: (...args: any[]) => void;
}