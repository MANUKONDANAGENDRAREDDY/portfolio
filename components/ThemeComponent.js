"use client"
import React, { useContext, useState} from 'react';
import ThemeContext from './ThemeContext';


const ThemeComponent = () => {
// const [theme,setTheme]=useState(ThemeContext)
    const { theme, setTheme }= useContext(ThemeContext)


const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
}

    return (
        <div style={{
        backgroundColor: theme === "light" ? "#fff" : "#333", 
        color: theme === "light" ? "#000" : "#fff", 
        padding: "20px", 
        textAlign: "center" 
        }}>
            <h1>{`Current Theme: ${theme}`}</h1>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </button>
        </div>

    );
}


export default ThemeComponent;