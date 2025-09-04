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
            <div className="flex flex-col text-center my-10 min-h-[250px] justify-center items-center ">
              <h1 className="text-7xl uppercase">Zustand</h1>
              <p className="text-xl uppercase">Gestor de estado sencillo para React</p>
            </div>
            <DefinicionZustand />
            <h2 className="text-xl uppercase mt-8 mb-4">Pasos para usarlo</h2>
            <Pasos />
                <h2 className="text-xl uppercase mt-8 mb-4">Ejemplos</h2>
            <Ejemplos/>
          </div>
        </div>

        <FooterComponet />
      </div>
    </>
  )
}

export default App
