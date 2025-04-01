import React from 'react'
import './Translator.css'
function Translator({lang, type}) {
 const translations = {
    en: {greeting: "Hello", farewell: "Goodbye"},
    es: {greeting: "Hola", farewell: "Adiós"},
    fr: {greeting: "Bonjour", farewell: "Au revoir"},
 } 
 let message = "";

 switch (type) {
    case 'farewell':
      switch (lang) {
        case 'en':
          message = translations.en.farewell;
          break;
        case 'es':
          message = translations.es.farewell;
          break;
        case 'fr':
          message = translations.fr.farewell;
          break;
        default:
          break;
      }
      break;
    case 'greeting':
      switch (lang) {
        case 'en':
          message = translations.en.greeting;
          break;
        case 'es':
          message = translations.es.greeting;
          break;
        case 'fr':
          message = translations.fr.greeting;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
 
return (
    <div>{message}</div>
  )
}

export default Translator