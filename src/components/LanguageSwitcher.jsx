import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const languageNames = {
    pt: 'Português',
    en: 'Inglês',
    es: 'Espanhol',
    fr: 'Francês',
    it: 'Italiano',
    de: 'Alemão'
};

const LanguageSwitcher = () => {
    const { lang, toggleLang } = useContext(LanguageContext);

    const languages = ['pt', 'en', 'es', 'fr', 'it', 'de'];
    const getNextLang = (currentLang) => {
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex];
    }

    const nextLang = getNextLang(lang)

    return (
        <button onClick={toggleLang}>
            Mudar para {languageNames[nextLang]}
        </button>
    )
}

export default LanguageSwitcher;