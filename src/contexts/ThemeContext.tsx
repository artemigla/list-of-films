import React, { useState, createContext, useContext } from "react";
import { THEMES } from './Theme.config'
import { ThemeType } from '../types/Types';
import { IThemeContextProps } from "../Interfaces/IProps";

export const ThemeContext = createContext<IThemeContextProps | any>({
    themeType: 'light',
    theme: THEMES['light']
} as IThemeContextProps);

export const ThemeProvider: React.FC<any> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            theme: THEMES[currentTheme],
            setCurrentTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);