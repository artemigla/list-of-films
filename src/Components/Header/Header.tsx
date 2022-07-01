import React from 'react';
import style from './styles/style.module.scss';

export const Header: React.FC = () => {
    return (
        <header className={style.container}>
            <h3>Header</h3>
        </header>
    )
}