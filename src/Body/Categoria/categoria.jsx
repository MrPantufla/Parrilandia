import './categoria.css';

export default function Categoria(args) {
    let productos = args.productos.filter((p) => p != '')

    return (
        <div className="contenedorPrincipalCategoria">
            {args.columna == 'izquierda' && <img style={{ width: `${args.anchoImagen}rem`, maxHeight: `${args.altoImagen}rem` }} src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/476803889_1010573994424865_2737248855729967222_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7oSnb1p7E-YQ7kNvgHIuF5D&_nc_oc=Adg4oLTgNrna3LT09O9weCqVw_QaQ0zRkSkklkFnzuQsips-XHrOsz5HeaqucwN_GDg&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=AVBpbfj0saus7Chsf5xHJox&oh=00_AYATk9S-5-eND4sokgKh4N5Vb1oKXhK6KDNIFcuEXOWIVw&oe=67BEB718" />}
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
            {args.columna == 'derecha' && <img style={{ width: `${args.anchoImagen}rem`, maxHeight: `${args.altoImagen}rem` }} src="https://i.pinimg.com/736x/80/6b/7e/806b7e5dc3aa6de56fe8f5f06517abea.jpg" />}
        </div >
    );
}
