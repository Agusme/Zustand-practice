import { Route, Routes } from "react-router-dom"
import FooterComponet from "./components/layouts/FooterComponet"
import NavbarComponent from "./components/layouts/NavbarComponent"
import DefinicionZustand from "./components/pages/DefinicionZustand"
import Ejemplos from "./components/pages/Ejemplos"
import Pasos from "./components/pages/Pasos"
import EjemploContadorCodigo from "./components/ejemplos/contador/EjemploContadorCodigo"
import TemaEjemplo from "./components/ejemplos/toggle/TemaEjemplo"



function App() {

  return (
    <>

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow bg-main">
          <div className="md:px-28 px-10 text-white">
            <NavbarComponent />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                   <DefinicionZustand />
                   <Pasos />
                    <Ejemplos />
                  </>
                }
              />
              <Route path="/contador-ejemplo" element={<EjemploContadorCodigo/>} />
              <Route path="/tema-ejemplo" element={<TemaEjemplo/>} />
              <Route path="/ejemplos" element={<Ejemplos/>} />
            </Routes>

          </div>
        </div>
        <FooterComponet />
      </div>
    </>
  )
}

export default App
