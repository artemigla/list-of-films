import React, { useContext } from 'react';
import style from './styles/style.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
export const Header: React.FC = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={style.container}>
            <div className={style.logo}>
            </div>
            <div>
            </div>
            <div className={style.headerRigth}>
                <div className={style.selectTheme}>
                    <button onClick={toggleTheme}>{theme === 'light' ?
                        <FaSun size={21} color={'white'} /> :
                        <FaMoon size={21} color={'white'} />}</button>
                </div>
            </div>
        </header >
    )
}