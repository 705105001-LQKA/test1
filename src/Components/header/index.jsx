import React, {useContext, useEffect} from 'react'
import { themeContext } from '../../App';
import './style.scss'
import { dictionary } from '../../lang';

const Header = () => {
    const crrThemeContext = useContext(themeContext);
    useEffect(() => {
        const crrTheme = localStorage.getItem('theme');
        if (crrTheme) {
          crrThemeContext.setThemeValue(crrTheme);
        } else{
          localStorage.setItem('theme', crrThemeContext.themeValue);
        }
      }, []);
    return (
        <div className='header'>
            <ul>
                <li>{dictionary[crrThemeContext.lang]['A_2']}</li>
                <li>{dictionary[crrThemeContext.lang]['A_3']}</li>
                <li>{dictionary[crrThemeContext.lang]['A_4']}</li>
                <button onClick={() => {
                    crrThemeContext.setThemeValue(crrThemeContext.themeValue === 'light' ? 'dark' : 'light');
                }}>{dictionary[crrThemeContext.lang]['A_5']}</button>
                <button onClick={() => {
                    crrThemeContext.setLang(crrThemeContext.lang === 'vi' ? 'en' : 'vi');
                }}>{dictionary[crrThemeContext.lang]['A_6']}</button>
            </ul>
        </div>
    )
}

export default Header;