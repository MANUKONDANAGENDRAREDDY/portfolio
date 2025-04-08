"use client"
import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const LanguageSwitcher = () => {
    const {language, switchLanguage} = useContext(LanguageContext);
    
    return (
       <button  
        onClick={switchLanguage} 
        style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px"
        }}>
            {language === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
        </button>
    )
            
  }

export default LanguageSwitcher;