import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './contexts/ThemeContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);