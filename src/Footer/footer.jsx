import './footer.css';

export default function Footer() {

    const esCelular = window.innerWidth <= 820

    return (
        <div className="contenedorPrincipalFooter">
            <div className="contactoContainer">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg><span> </span>3456-473813</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg><span> </span>Ruta 14, km 338</p>
            </div>
            <div className="footerPersonal">
                Programación y diseño:<span> </span>
                <a target="blank" href={esCelular ? ('https://wa.me/5493456414062') : ('https://web.whatsapp.com/send?phone=+5493456414062')}>
                    <p>Juan Manuel Pizzio</p>
                </a>
            </div>
        </div>
    );
}