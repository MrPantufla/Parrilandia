import { useDatos } from '../datosContext';
import './header.css';

export default function Header() {

    const { menuAbierto, setMenuAbierto } = useDatos();

    return (
        <div className="contenedorPrincipalHeader">
            <img src="./Imagenes/parrilandiaColor.png" />
            <div className="botonMenu" onClick={() => setMenuAbierto(!menuAbierto)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </div>
        </div>
    );
}