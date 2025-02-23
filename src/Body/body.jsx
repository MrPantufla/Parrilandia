import { useDatos } from '../datosContext';
import './body.css';
import Categoria from './Categoria/categoria';

export default function Body() {
    const { rows, categoriasRefs, setMenuAbierto } = useDatos();

    return (
        <div className="contenedorPrincipalBody" onClick={() => setMenuAbierto(false)}>
            <div className="columna columnaIzquierda">
                {rows.map((row, index) => {
                    let categoria = row[0];
                    let imagen = row[1];
                    let productos = row.slice(2).filter((p) => p !== "");

                    const columna = index % 2 === 0 ? 'izquierda' : 'derecha';

                    return index % 2 === 0 && (
                        <div
                            key={index}
                            ref={(ref) => categoriasRefs.current[index] = ref} // Asignar la referencia aquí
                        >
                            <Categoria
                                categoria={categoria}
                                imagen={imagen}
                                productos={productos}
                                columna={columna}
                                anchoImagen="20"
                                altoImagen="15"
                            />
                        </div>
                    );
                })}
            </div>

            <div className="columna columnaDerecha">
                {rows.map((row, index) => {
                    const categoria = row[0];
                    const imagen = row[1];
                    const productos = row.slice(2);
                    const columna = index % 2 === 0 ? 'izquierda' : 'derecha';

                    return index % 2 === 1 && (
                        <div
                            key={index}
                            ref={(ref) => categoriasRefs.current[index] = ref} // Asignar la referencia aquí también
                        >
                            <Categoria
                                categoria={categoria}
                                imagen={imagen}
                                productos={productos}
                                columna={columna}
                                anchoImagen="20"
                                altoImagen="15"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
