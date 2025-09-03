import DefinicionZustand from "./components/DefinicionZustand"
import Ejemplos from "./components/Ejemplos"
import FooterComponet from "./components/FooterComponet"
import NavbarComponent from "./components/NavbarComponent"
import Pasos from "./components/Pasos"


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow bg-main">
          <div className="md:px-28 px-10 text-white">
            <NavbarComponent />
            <div className="flex flex-col text-center my-10">
              <h1 className="text-7xl uppercase">Zustand</h1>
              <p className="text-xl uppercase">Gestor de estado sencillo para React</p>
            </div>
            <DefinicionZustand />
            <Pasos />
            <Ejemplos/>
          </div>
        </div>

        <FooterComponet />
      </div>
    </>
  )
}

export default App
