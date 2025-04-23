import { useDatos } from '../../datosContext';
import { useRef } from 'react';
import './menu.css';

export default function Menu() {
    const { rows, menuAbierto, setMenuAbierto, categoriasRefs } = useDatos();

    // Función para hacer scroll hasta la categoría correspondiente
    const scrollToCategoria = (index) => {
        const categoriaRef = categoriasRefs.current[index];
        if (categoriaRef) {
            categoriaRef.scrollIntoView({ behavior: 'smooth' });
            setMenuAbierto(false);
        }
    };

    const categorias = rows.map(subarray => subarray[1]);

    return (
        <div className={`contenedorPrincipalMenu ${menuAbierto ? 'abierto' : 'cerrado'}`}>
            <img src="/Imagenes/logoBlanco.png" alt="Logo" />

            <section className="blokken">
                <div className="contenedorListaMenu">
                    {categorias.map((categoria, index) => (
                        <h1 
                            key={index} 
                            onClick={() => scrollToCategoria(index)}
                        >
                            {categoria}
                        </h1>
                    ))}
                </div>
            </section>
        </div>
    );
}