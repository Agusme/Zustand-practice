import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavbarComponent() {
    return (
        <div>
            <div className="navbar shadow-sm text-white">
                <div className="flex-1">
                    <Link to='/' className="font-bold text-xl ">Zustand</Link>
                </div>
       <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to='/'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>
            <li><HashLink smooth to="/#ejemplos">Ejemplos</HashLink></li>
<li><HashLink smooth to="/#pasos">Pasos</HashLink></li>
          
          </ul>
        </div>

        {/* Menú hamburguesa en mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost hover:bg-blue-950 hover:text-white hover:border-none hover:shadow-none focus:outline-none focus:ring-0 active:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-950 rounded-box w-52 text-white"
          >
            <li><Link to="/">Inicio</Link></li>
<li><HashLink smooth to="/#ejemplos">Ejemplos</HashLink></li>
<li><HashLink smooth to="/#pasos">Pasos</HashLink></li>
        </ul>
        </div>
            </div>
        </div>
    )
}
