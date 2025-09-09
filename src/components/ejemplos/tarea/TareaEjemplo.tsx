import EjemploPasosComunes from "../../common/EjemploPasosComunes";
import ejemplo from '../../../assets/tarea1.png';
import ejemplo2 from '../../../assets/tarea2.png';
export default function TareaEjemplo() {
  return (
    <div>
        <EjemploPasosComunes imagen1={ejemplo} imagen2={ejemplo2}  nombre="useTaskStore" estado='taskList' funciones='agregar, completar y  eliminar tarea' 
/>
    </div>
  )
}
