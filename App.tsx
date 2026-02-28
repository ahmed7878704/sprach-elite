import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Lesen } from './pages/Lesen';
import { Sprechen } from './pages/Sprechen';
import { Wortbildung } from './pages/Wortbildung';
import { Level } from './types';

export default function App() {
  const [level, setLevel] = useState<Level>('B2');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout level={level} setLevel={setLevel} isDark={isDark} toggleTheme={toggleTheme} />}>
          <Route index element={<Home />} />
          <Route path="lesen" element={<Lesen />} />
          <Route path="sprechen" element={<Sprechen />} />
          <Route path="wortbildung" element={<Wortbildung />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
