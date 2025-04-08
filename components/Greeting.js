"use client"
import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const Greeting = () => {
    const { language } = useContext(LanguageContext);

    const messages =  {
        en: "Hello, welcome to our website",
        es: "¡Hola, bienvenido a nuestro sitio web!",
    };
    return <h2>{messages[language]}</h2>
}


export default Greeting;