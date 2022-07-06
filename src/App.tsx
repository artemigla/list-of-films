import React, { useContext } from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/contents/Card';
import { Slide } from './components/slide/Slide';
import style from './App.module.scss';
import { DarkModeContext } from './contexts/ThemeContext';

const App: React.FC = () => {
  const { mode } = useContext(DarkModeContext);
  return (
    <div className={style.container} style={{ background: mode['--black'] } as React.CSSProperties}>
      <Header />
      <Slide />
      <Card />
    </div>
  );
}
export default App;