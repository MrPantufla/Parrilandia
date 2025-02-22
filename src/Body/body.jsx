import { useDatos } from '../datosContext';
import './body.css';
import Categoria from './Categoria/categoria';

export default function Body() {

    const { rows } = useDatos();

    return (
        <div className="contenedorPrincipalBody">
            <div className="columna columnaIzquierda">
                {rows.map((row, index) => {
                    let categoria = row[0];
                    let imagen = row[1];
                    let productos = row.slice(2).filter((p) => p != "");

                    console.log(productos)
                    const columna = index % 2 === 0 ? 'izquierda' : 'derecha';

                    // Condicional para filtrar por índice par (por ejemplo)
                    return index % 2 === 0 && (
                        <Categoria
                            categoria={categoria}
                            imagen={imagen}
                            productos={productos}
                            columna={columna}
                            anchoImagen="20"
                            altoImagen="15"
                            key={index}
                        />
                    );
                })}
            </div>

            <div className="columna columnaDerecha">
                {rows.map((row, index) => {
                    const categoria = row[0];
                    const imagen = row[1];
                    const productos = row.slice(2);
                    const columna = index % 2 === 0 ? 'izquierda' : 'derecha';

                    // Condicional para filtrar por índice par (por ejemplo)
                    return index % 2 === 1 && (
                        <Categoria
                            categoria={categoria}
                            imagen={imagen}
                            productos={productos}
                            columna={columna}
                            anchoImagen="20"
                            altoImagen="15"
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}