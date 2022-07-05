import React from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/contents/Card';
import { Slide } from './components/slide/Slide';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Slide />
      <Card />
    </div>
  );
}
export default App;
