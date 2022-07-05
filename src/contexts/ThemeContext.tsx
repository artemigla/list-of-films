import React, { useState, createContext } from "react";
import { Theme } from '../types/Types'
type ThemeContext = { theme: Theme; toggleTheme: () => void };

//eslint-disable-next-line
export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}