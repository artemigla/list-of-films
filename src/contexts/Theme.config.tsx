import { Color } from "../models/color.model";
import { ThemeType } from "../types/Types";
import { ITheme } from "../Interfaces/IProps";

export const THEMES: Record<ThemeType, ITheme> = {
    light: {
        '--primary': Color.PRIMARY,
        '--light': Color.LIGHT_SILVER,
        '--black': Color.DARK,
    },
    dark: {
        '--primary': Color.PRIMARY,
        '--light': Color.DARK,
        '--black': Color.LIGHT_SILVER,
    }
};
