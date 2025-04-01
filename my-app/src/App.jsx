import './App.css'
import Translator from './components/Translator/Translator'
function App() {
  

  return (
    <div className='App'>
      <h1>Greetings:</h1>
      <Translator lang="en" type="greeting"/>
      <Translator lang="es" type="greeting"/>
      <Translator lang="fr" type="greeting"/>
      <h1>Farewells:</h1>
      <Translator lang="en" type="farewell"/>
      <Translator lang="es" type="farewell"/>
      <Translator lang="fr" type="farewell"/>

    </div>
  )
}

export default App
