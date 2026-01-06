import { useState, useEffect } from 'react';
import './index.css';
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoading ? '' : 'animate-page-fade'}>
      {isLoading ? <LoadingPage /> : <HomePage />}
    </div>
  );
}
