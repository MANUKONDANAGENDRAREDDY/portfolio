"use client"
import React,{ useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en")

    const SwitchLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage ==="en" ? "es": "en"));
    }

    return (
        <LanguageContext.Provider value={{language,SwitchLanguage}}>
            {children}
        </LanguageContext.Provider>
    )

}


export default LanguageProvider;