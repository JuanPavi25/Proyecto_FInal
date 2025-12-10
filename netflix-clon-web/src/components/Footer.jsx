import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                    <ul>
                        <li className="ps-2 pb-3">
                            ¿Preguntas? Llama al <a href="tel:0180051915">01 800 519 1570</a> (sin cargo)
                        </li>
                    </ul>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <ul>
                            <li><a href="">Preguntas frecuentes</a></li>
                            <li><a href="">Inversores</a></li>
                            <li><a href="">Formas de ver</a></li>
                            <li><a href="">Información corporativa</a></li>
                            <li><a href="">Avisos legales</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <ul>
                            <li><a href="">Centro de ayuda</a></li>
                            <li><a href="">Empleo</a></li>
                            <li><a href="">Términos de uso</a></li>
                            <li><a href="">Contáctanos</a></li>
                            <li><a href="">Solo en Netflix</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <ul>
                            <li><a href="">Cuenta</a></li>
                            <li><a href="">Canjear tarjetas regalo</a></li>
                            <li><a href="">Privacidad</a></li>
                            <li><a href="">Prueba de velocidad</a></li>
                            <li><a href="">Opciones de anuncios</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <ul>
                            <li><a href="">Zona de prensa</a></li>
                            <li><a href="">Comprar tarjetas regalo</a></li>
                            <li><a href="">Preferencias de cookies</a></li>
                            <li><a href="">Garantía legal</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row ps-4 pb-4">
                    <div className="col-lg-2 col-md-4 col-6">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="position-absolute mt-2 ms-2 default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="white"></path></svg>
                        <select className="form-select text-white text-center" defaultValue="Español" aria-label="Seleccionar idioma">
                            <option>Español</option>
                            <option value="1">English</option>
                        </select>
                    </div>
                    <p className="mt-5">Netflix Colombia</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
