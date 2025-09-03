import contador from '../assets/contador.jpg'
import toggle from '../assets/toggle-button.jpg'
import lista from '../assets/lista-tareas.jpg'
export default function Ejemplos() {
  return (
    <div className="bg-footer my-5 px-5 py-16">
        <div className="text-center up my-2">
            <h2 className="text-3xl font-semibold"> Ejemplos</h2>
        <p>3 ejemplos prácticos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
<figure>
    <img src={contador} alt="" />
<p className='uppercase'>Contador</p>
</figure>
<figure>
    <img src={toggle} alt="" />
<p className='uppercase'>Tema claro/oscuro</p>
</figure>
<figure>
    <img src={lista} alt="" />
<p className='uppercase'>Lista de tarea</p>
</figure>
        </div>
    </div>
  )
}
