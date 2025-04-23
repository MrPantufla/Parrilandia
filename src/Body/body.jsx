import { useDatos } from '../datosContext';
import './body.css';
import Categoria from './Categoria/categoria';

export default function Body() {
    const { rows, categoriasRefs, setMenuAbierto } = useDatos();

    return (
        <div className="contenedorPrincipalBody" onClick={() => setMenuAbierto(false)}>
            <div className="columna columnaIzquierda">
                {rows.map((row, index) => {
                    let categoria = row[1];
                    let imagen = row[2];
                    let productos = row.slice(2).filter((p) => p !== "");

                    const columna = index % 2 === 0 ? 'izquierda' : 'derecha';

                    return index % 2 === 0 && (
                        <div
                            key={index}
                            ref={(ref) => categoriasRefs.current[index] = ref}
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
                    const categoria = row[1];
                    const imagen = row[2];
                    const productos = row.slice(2);
                    const columna = index % 2 === 0 ? 'izquierda' : 'derecha';

                    return index % 2 === 1 && (
                        <div
                            key={index}
                            ref={(ref) => categoriasRefs.current[index] = ref}
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
