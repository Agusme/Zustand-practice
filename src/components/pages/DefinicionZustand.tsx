import CardFond from "../common/CardFond";

export default function DefinicionZustand() {
    return (
        <div>
            <div className="flex flex-col text-center my-10 min-h-[250px] justify-center items-center ">
                <h1 className="text-7xl uppercase">Zustand</h1>
                <p className="text-xl uppercase">Gestor de estado sencillo para React</p>
            </div>
            <CardFond className="p-5 "><h1 className="text-2xl font-semibold ">¿Qué es Zustand?</h1>
                <p >Zustand es una librería ligera de manejo de estado global para React.</p></CardFond>
        </div>
    )
}
