import { Dispatch, ReactNode, SetStateAction } from "react";
import { Color } from "../models/color.model";
import { ButtonType, ThemeType } from "../types/Types";

export interface IMovieProps {
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}

export interface ITheme {
    '--primary': Color;
    '--light': Color;
    '--black': Color;
}

export interface IButtonProps {
    type: ButtonType;
    theme: ITheme;
    onClick: (...args: any[]) => void;
    children: ReactNode
}

export interface IThemeContextProps {
    themeType: ThemeType;
    theme: ITheme,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}