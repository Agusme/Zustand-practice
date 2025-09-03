
export default function NavbarComponent() {
    return (
        <div>
            <div className="navbar shadow-sm text-white">
                <div className="flex-1">
                    <a className="font-bold text-xl ">Zustand</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Inicio</a></li>
                        <li><a>¿Qué es?</a></li>
                        <li><a>Pasos</a></li>
                        <li><a>Ejemplos</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
