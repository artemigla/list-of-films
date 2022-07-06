import React from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/contents/Card';
import { Slide } from './components/slide/Slide';
import style from './App.module.scss';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={style.container} style={{ background: theme['--light'] } as React.CSSProperties}>
      <Header />
      <Slide />
      <Card />
    </div>
  );
}
export default App;