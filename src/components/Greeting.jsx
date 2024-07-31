import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const greetings = {
    pt: 'Olá, esta é uma saudação em Português-br!',
    en: 'Hello, this is a greeting in English!',
    es: 'Hola, este es un saludo en Español!',
    fr: 'Bonjour, ceci est une salutation en Français!',
    it: 'Ciao, questo è un saluto in Italiano!',
    de: 'Hallo, das ist eine Begrüßung aif Deutsch!'
};

const Greeting = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <div>
            <h1>{greetings[lang]}</h1>
            <img src="./ola.png" alt="ola" width={400}></img>
        </div>
    )
};

export default Greeting;