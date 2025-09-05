import CardFond from "../common/CardFond";

export default function Pasos() {

    return (
        <div id="pasos">
            <h2 className="text-xl uppercase mt-10 mb-4">Pasos para usarlo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5">
            <div className="bg-[#05B5CC] p-2 ">
                <p className="text-lg">1. Instalación</p>
                <CardFond className="p-3">
                    <p className="font-mono text-sm">npm i zustand</p>
                </CardFond>
            </div>
            <div className="bg-[#FBAE08] p-2 ">
                <p className="text-lg">2. Crear un Store: usando <span className="font-bold">create</span> y definiendo <span className="font-bold">estados</span> +<span className="font-bold"> acciones</span></p>
                <CardFond className="p-2">
                 
                    <pre className="overflow-x-auto">
                        <code className="font-mono text-sm">{`import { create } from "zustand";

export const useCounterStore = 
create((set) => ({  
  count: 0,
  increase: () => set((state) => 
    ({ count: state.count + 1 })),
  decrease: () => set((state) =>
    ({ count: state.count - 1 })),
}));
`}</code>
                    </pre>
                </CardFond>
            </div>
            <div className="bg-[#E84A94] p-2 ">
                <p className="text-lg">3. Usar el Hook: Importamos el store y lo usamos dentro del componente</p>

   <CardFond className="p-2">
          <pre className="overflow-x-auto">
            <code className="font-mono text-sm">
{`import { useCounterStore } from 
"./useCounterStore";

const { count, increase } = 
useCounterStore();

<h1 className="text-2xl font-bold">
Contador: {count}</h1>
<button onClick={increase}>
Aumentar</button>`}</code>
          </pre>
        </CardFond>
            </div>
        </div>
        </div>
    )
}
