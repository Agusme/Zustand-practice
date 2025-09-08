import ejemplo from '../../../assets/ejemplo-contador.png'
import ejemploContador2 from '../../../assets/ejemplo-contador2.png'
import CardFond from '../../common/CardFond'
export default function EjemploContadorCodigo() {
  return (
    <div>
      <h2 className='text-2xl my-4 uppercase'>Explicación y Código</h2>
          <h3 className="text-xl font-semibold">Pasos:</h3>
      <CardFond>
  <div className='flex flex-col md:flex-row gap-4 mb-4 p-4'>
        <div className="flex-1">
          <ol className="list-decimal list-inside">
            <li>
              Creamos el <strong>STORE</strong> del contador:
              <ol className="list-decimal list-inside ml-6 space-y-1">
                <li className="ms-3">Importamos create de Zustand.</li>
                <li className="ms-3">
                  En caso de usar Typescript: Definimos los Types.
                </li>
                <li className="ms-3">
                  Creamos el store con el <strong>estado inicial</strong> (count) y
                  las <strong>funciones</strong> (increase, decrease).
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="flex-1 flex justify-center">
          <figure>
            <img src={ejemplo} alt="ejemplo contador" className="rounded-lg md:w-96" />
          </figure>
        </div>
      </div>
      </CardFond>
    <CardFond>

     <div className='flex flex-col md:flex-row gap-4 mb-8 p-4'>
        <div className="flex-1">
          <ol start={2} className="list-decimal list-inside">
            <li>
              Creamos el <strong>COMPONENTE</strong> que usa el store y muestra el contador:
              <ol className='list-decimal list-inside ml-6 space-y-1'>
                <li className='ms-3'>
                  Importamos el <strong>useCounterStore</strong> desde el store.
                </li>
                <li className='ms-3'>
                  Leemos las propiedades y funciones del estado (count, increase, decrease).
                </li>
                <li className='ms-3'>Mostramos el contador en pantalla.</li>
                <li className='ms-3'>Creamos botones para incrementar y decrementar.</li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="flex-1 flex justify-center">
          <figure>
            <img src={ejemploContador2} alt="ejemplo componente contador" className="rounded-lg md:w-96" />
          </figure>
        </div>
      </div>
    </CardFond>

    </div>
  )
}
