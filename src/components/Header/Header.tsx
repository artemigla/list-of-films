import React, { useContext } from "react";
import style from './styles/style.module.scss'
import { IDarkModeContext } from "../../Interfaces/IProps";
import { DarkModeContext } from "../../contexts/ThemeContext";

export const Header: React.FC = () => {

    const theme = useContext(DarkModeContext);

    const setTheme = (darkMode: IDarkModeContext) => {
        const isDark = darkMode.mode.isDark;
        darkMode.dispatch(!isDark);
    };

    return (
        <header className={style.container}>
            <div className={style.logo}>
            </div>
            <div>
            </div>
            <label className={style.headerRigth}>
                <input type={'checkbox'} onChange={() => setTheme(theme)} />
                <span className={style.check} />
            </label>
        </header >
    )
};
