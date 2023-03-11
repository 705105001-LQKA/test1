import { useState, createContext, useEffect } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import './App.css';
import './theme/theme.scss';
import { dictionary } from './lang';

export const themeContext = createContext({
  themeValue: null,
  setThemeValue: (bolValue) => { },
  Lang: null,
  setLang: (lang) => { },
});
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState('vi'); 
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <themeContext.Provider value={{
      themeValue: theme,
      setThemeValue: (bolValue) => setTheme(bolValue),
      lang: lang,
      setLang: (lang) => setLang(lang),
    }}>
      <div className={`App ${theme}`}>
        <Header />
        <div className="content-main-app">
          <h1>{dictionary[lang]['A_1']}</h1>
        </div>
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default App;
