import Greeting from "./components/Greeting"
import { LanguageProvider } from "./components/LanguageContext"
import LanguageSwitcher from "./components/LanguageSwitcher"


function App() {

  return (
    <>
    <LanguageProvider>
      <div>
        <LanguageSwitcher />
        <Greeting />
      </div>
    </LanguageProvider>
    </>
  )
}

export default App
