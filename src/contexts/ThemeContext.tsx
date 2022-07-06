import React, { Context, createContext, useReducer, useEffect } from "react";
import { DARK_THEME, LIGHT_THEME } from "../constants/Constants";
import { IDarkModeContext } from "../Interfaces/IProps";

const darkModeReducer = (_: any, isDark: boolean) => isDark ? DARK_THEME : LIGHT_THEME;

const DarkModeContext: Context<IDarkModeContext> = createContext(
    {} as IDarkModeContext
);

const initialState = JSON.parse(localStorage.getItem("theme") as string) || LIGHT_THEME;

const DarkModeProvider: React.FC<any> = ({ children }) => {
    const [mode, dispatch] = useReducer(darkModeReducer, initialState);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(mode));
    }, [mode]);

    return (
        <DarkModeContext.Provider
            value={{
                mode,
                dispatch
            }}
        >
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeProvider, DarkModeContext };