import EjemploPasosComunes from "../../common/EjemploPasosComunes";
import ejemplo1 from "../../../assets/temaEj1.png"
import ejemplo2 from '../../../assets/temaEj2.png'
export default function TemaEjemplo() {
  return (
    <div>
            <EjemploPasosComunes imagen1={ejemplo1} imagen2={ejemplo2} nombre="useThemeStore" estado="theme" funciones="toggleTheme" />
    </div>
  )
}
