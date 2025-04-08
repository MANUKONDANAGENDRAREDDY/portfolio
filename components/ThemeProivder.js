"use client"
import { useState,Children } from 'react';
import ThemeContext from './ThemeContext';


const ThemeProivder = ({Children}) => {
    const [theme, setTheme] = useState("light")


return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {Children}
    </ThemeContext.Provider>
)}

export default ThemeProivder;