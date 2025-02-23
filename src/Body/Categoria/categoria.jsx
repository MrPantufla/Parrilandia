import './categoria.css';

export default function Categoria(args) {
    let productos = args.productos.filter((p) => p != '')

    return (
        <div className="contenedorPrincipalCategoria">
            {args.columna == 'izquierda' && <img src={args.imagen || ""} />}
            <h1>{args.categoria}</h1>
            <div className={`lista ${args.columna}`}>
                {productos.map((item, index) => (
                    index % 2 === 0 && (
                        <div key={index}>
                            <p>{item}</p>
                            <h2>{productos[index + 1]}</h2>
                        </div>
                    )
                ))}
            </div>
            {args.columna == 'derecha' && <img src={args.imagen || ""} />}
        </div >
    );
}
