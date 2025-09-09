import CardFond from "../common/CardFond";

export default function Pasos() {

    return (
        <div id="pasos" >
            <h2 className="text-xl uppercase mt-10 mb-4">Pasos para usar Zustand</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5">
                <div className="bg-[#05B5CC] p-2 ">
                    <p className="text-lg md:min-h-[3.5rem]">1. Instalación</p>
                    <CardFond className="p-3">
                        <p className="font-mono text-sm">npm i zustand</p>
                    </CardFond>
                </div>
               <div className="bg-[#FBAE08] p-2">
          <p className="text-lg min-h-[3.5rem]">
            2. Crear un Store: usando <span className="font-bold">create</span>{" "}
            y definiendo <span className="font-bold">estados</span> +{" "}
            <span className="font-bold">acciones</span>
          </p>
          <CardFond className="p-2">
            <pre className="overflow-x-auto">
              <code className="font-mono text-sm">{`import { create } from "zustand";

const useXStore = create((set) => ({
  // Estados iniciales
  state1: valorInicial,
  state2: valorInicial,
  // Acciones (funciones que 
  // actualizan los estados)
  setState1: (nuevoValor) =>
   set({ state1: nuevoValor }),
  updateState2: () => set((state)
   => ({ state2: state.state2 + 1 })),
}));`}</code>
            </pre>
          </CardFond>
        </div>
       {/* Paso 3 */}
        <div className="bg-[#E84A94] p-2">
          <p className="text-lg min-h-[3.5rem]">
            3. Usar el Hook: Importar el store y acceder a sus estados + acciones
          </p>
          <CardFond className="p-2">
            <pre className="overflow-x-auto">
              <code className="font-mono text-sm">{`import useXStore from "./useXStore";

export default function MiComponente() {
  // Desestructuramos 
  // estados y acciones
  const { state1, setState1 } 
  = useXStore();
  return ( <div>
      <p>{state1}</p>
      <button onClick={() =>
       setState1("nuevo valor")}>
        Cambiar 
        </button></div>);}`}</code>
            </pre>
          </CardFond>
        </div>
            </div>
        </div>
    )
}
