import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
    const [lang, setLang] = useState('pt');
    const languages = ['pt', 'en', 'es', 'fr', 'it', 'de'];

    const toggleLang = () => {
        setLang((prevLang) => {
            const currentIndex = languages.indexOf(prevLang);
            const nextIndex = (currentIndex + 1) % languages.length;
            return languages[nextIndex];
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {props.children}
        </LanguageContext.Provider>
    )
}