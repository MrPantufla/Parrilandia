import { useDatos } from '../datosContext';
import './header.css';

export default function Header() {

    const { menuAbierto, setMenuAbierto, rows } = useDatos();

    return (
        <div className="contenedorPrincipalHeader">
            <img src="./Imagenes/parrilandiaColor.png" />

            <h1 className="subtitulo">PARRILLA Y ALOJAMIENTO</h1>

            <div className="contenedorTiposDePago">
                <h1>{rows?.[0]?.[0] || ''}</h1>
                <h1>{rows?.[1]?.[0] || ''}</h1>
                <div className="separadorCreditoYDigital">
                    <p>{rows?.[2]?.[0] || ''}</p>
                    <p>{rows?.[3]?.[0] || ''}</p>
                </div>
            </div>

            <div className="botonMenu" onClick={() => setMenuAbierto(!menuAbierto)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </div>
        </div>
    );
}
