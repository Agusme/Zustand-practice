import contador from '../assets/contador.jpg'
import toggle from '../assets/toggle-button.jpg'
import lista from '../assets/lista-tareas.jpg'
import Modal from './Modal'
import ContadorModal from './ContadorModal'
import TemaModal from './TemaModal'
import TareaModal from './TareaModal'
export default function Ejemplos() {

  return (
    <div className="bg-footer my-5 px-5 py-16">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<figure >
    <img src={contador} alt="contador" />
<p className='uppercase text-center mt-3'>Contador</p>
<Modal title='Contador'>  <ContadorModal/>
 </Modal>
</figure>
<figure >
    <img src={toggle} alt="tema claro u oscuro" />
<p className='uppercase text-center mt-3'>Tema Claro/Oscuro</p>
<Modal title='Tema Claro/Oscuro'>  <TemaModal/>
 </Modal>
</figure>
<figure >
    <img src={lista} alt="lista de tareas" />
<p className='uppercase text-center mt-3'>Lista de tareas</p>
<Modal title='Lista de Tareas'>  <TareaModal/>
 </Modal>
</figure>
        </div>
    </div>
  )
}
