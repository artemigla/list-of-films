import React, { useState } from 'react';
import style from './styles/style.module.scss';
import { useTheme } from '../../contexts/ThemeContext';

export const Header: React.FC = () => {

    const [isTrue, setIsTrue] = useState<boolean>(false);
    const { theme, setCurrentTheme } = useTheme();

    const toggle = () => {
        setIsTrue(!isTrue);
        !isTrue ? setCurrentTheme('dark') : setCurrentTheme('light');
    }
    return (
        <header className={style.container}>
            <div className={style.logo}>
            </div>
            <div>
            </div>
            <label className={style.headerRigth}>
                <input type="checkbox" value={theme} onInput={toggle} />
                <span className={style.check} />
            </label>
        </header >
    )
}