import ejemplo from '../../../assets/ejemplo-contador.png'
import ejemploContador2 from '../../../assets/ejemplo-contador2.png'
import EjemploPasosComunes from '../../common/EjemploPasosComunes'
export default function EjemploContadorCodigo() {
  return (
    <div>
      
<EjemploPasosComunes imagen1={ejemplo} imagen2={ejemploContador2}  nombre="useCounterStore" estado='contador' funciones='incrementar y decrementar' 
/>
    </div>
  )
}
