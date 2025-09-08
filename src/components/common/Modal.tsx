import React, { useRef } from "react"

type modalProps ={
title:string,
children:React.ReactNode}

export default function Modal({title, children}:modalProps) {
    const modalRef = useRef<HTMLDialogElement>(null)
  return (
    <div>
        
<div className="flex justify-center my-3">
    <button className="btn btn-ghost" onClick={()=>modalRef.current?.showModal()}>Ver más</button>
</div>
 <dialog ref={modalRef} className="modal">
    
        <div className="modal-box bg-footer">
            
          <h3 className="font-bold text-3xl">{title} </h3>
        {children}

          {/* Botón visible de cerrar */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cerrar</button>
            </form>
          </div>
        </div>

        {/* Cierra al hacer clic afuera */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        
      </dialog>
      
        
    </div>
  )
}
