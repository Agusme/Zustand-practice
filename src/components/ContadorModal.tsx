import ejemplo from '../assets/ejemplo-contador.png'
export default function ContadorModal() {
  return (
    <div>
        <p>1. Creamos el <strong>STORE</strong> del contador</p>
      <p className='text-sm ms-3'>I. Importamos create de Zustand</p>
          <p className='text-sm ms-3'>II. En caso de usar Typescript: Definimos los Types </p>
          <p className='text-sm ms-3'>III. 
            Creamos el store con el <strong>estado inicial</strong> (count) y las <strong>funciones </strong>(increase, decrease)
          </p>

       <figure>
        <img src={ejemplo} alt="ejemplo contador" />
       </figure>
    </div>
  )
}
