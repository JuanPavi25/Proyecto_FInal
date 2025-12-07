import React from "react"
import './Home.css'

const NavBar = () => {
    return (
        <><nav className="navbar navbar-dark bg-black p-2">
            <div className="container-fluid px-5">
                <img className="navbar-brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo"></img>

                <form className="d-flex align-items-center gap-1 p-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="position-absolute mt-2 ms-2 default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="white"></path></svg>
                    <select className="form-select text-white text-center" defaultValue="Español">
                        <option >Español</option>
                        <option value="1">English</option>
                    </select>
                    <button type="button" className="btn text-white d-inline bg-danger">Iniciar Sesión</button>
                </form>
            </div>
        </nav>
            <div className="bg-img">
                <div className="layer">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-12 text-center w-75 mt-5">
                            <h1 className="fs-1 mt-5">Los grandes éxitos españoles e internacionales. Las mejores historias. Todos en Netflix.</h1>
                            <h3 className="fs-4 mt-4">Ve Netflix donde quieras. Cancela cuando quieras.</h3>
                            <h5 className="mt-4">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</h5>
                        </div>
                    </div>


                    <div className="row w-100 mt-3">
                        <div className="col-md-2 col-1"></div>

                        <div className="col-md-8 col-10 p-0 main-search">
                            <div className="d-flex mb-3 justify-content-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Dirección de correo"
                                />

                                <button className="btn ms-2 text-white text-center fw-bold fs-4">
                                    <a href="login.html" className="text-white text-decoration-none">
                                        Empezar
                                    </a>
                                    <i className="bi bi-chevron-right text-white ms-2"></i>
                                </button>
                            </div>
                        </div>

                        <div className="col-md-2 col-1"></div>
                    </div>
                </div>
            </div ><section>
                <div className="container">
                    <div className="row align-items-center reverse">
                        <div className="col-lg-6">
                            <h2>Disfruta en tu tele</h2>
                            <p>Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png">
                            </img></div>
                    </div>
                </div>
            </section><section>
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-lg-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png">
                            </img></div>
                        <div className="col-lg-6">
                            <h2>Usa cualquier dispositivo</h2>
                            <p>Ve en streaming todas las películas y series en tu móvil, tableta, ordenador y televisor.</p>
                        </div>
                    </div>
                </div>
            </section><section>
                <div className="container">
                    <div className="row align-items-center reverse">
                        <div className="col-lg-6">
                            <h2>Crea perfiles infantiles</h2>
                            <p>Deja que los niños vivan aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, gratis con tu suscripción.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://occ-0-358-360.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfqIddV64JsFW70ZLyiGkx_uJQMdtpWNP8g361QHR1WQSDmLmuv967PGBRIRJX9QB731ET5MlcyjW6-cYmVYL6JmtRuo6bjxD1wk.png?r=b32">
                            </img></div>
                    </div>
                </div>
            </section><section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg">
                            </img></div>
                        <div className="col-lg-6">
                            <h2>Descárgate tus favoritas para verlas sin conexión</h2>
                            <p>Disfruta de Netflix en tierra, mar y aire…</p>
                        </div>
                    </div>
                </div>
            </section><section>
                <div className="faq">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="mb-5">Preguntas frecuentes</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-1"></div>
                        <div className="col-lg-6 col-md-8 col-10 p-0">

                            <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls autoPlay="multiCollapseExample1">¿Qué es Netflix?</a>

                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet.
                                    Puedes ver todo lo que quieras, cuando quieras, por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!
                                </div>
                            </div>

                            <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls autoPlay="multiCollapseExample2">¿Cuánto cuesta Netflix?</a>

                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    Disfruta de Netflix en tu smartphone, tableta, Smart TV, ordenador o dispositivo de streaming, todo por una tarifa mensual fija. Planes desde 5,49 € a 17,99 € al mes. Sin cargos adicionales ni contratos.
                                </div>
                            </div>

                            <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls autoPlay="multiCollapseExample3">¿Dónde puedo ver Netflix?</a>

                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                <div className="card card-body">
                                    Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación de Netflix, entre ellos, smart TV, smartphones, tabletas, reproductores multimedia de streaming y consolas de juegos.
                                    También puedes descargar tus series favoritas con la aplicación de iOS, Android o Windows 10. Utiliza las descargas para ver títulos dondequiera que vayas y cuando no dispongas de conexión a internet. Netflix siempre te acompaña.
                                </div>
                            </div>

                            <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls autoPlay="multiCollapseExample4">¿Cómo cancelo?</a>

                            <div className="collapse multi-collapse" id="multiCollapseExample4">
                                <div className="card card-body">
                                    Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento.
                                </div>
                            </div>

                            <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls autoPlay="multiCollapseExample5">¿Qué puedo ver en Netflix?</a>

                            <div className="collapse multi-collapse" id="multiCollapseExample5">
                                <div className="card card-body">
                                    Netflix dispone de una amplia biblioteca de originales de Netflix galardonados, títulos de anime, series de TV, documentales, largometrajes y otros contenidos. Ve todo el contenido que quieras, cuando quieras.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-1"></div>
                    </div>

                </div>
            </section><section>
                <div className="bottom-search">
                    <h5 className="text-center">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</h5>
                    <div className="row">
                        <div className="col-md-2 col-1"></div>
                        <div className="row w-100">

                            <div className="col-md-2 col-1"></div>
                            <div className="col-md-8 col-10 p-0 main-search">
                                <div className="d-flex mb-3 justify-content-center">
                                    <input type="text" className="form-control" placeholder="Dirección de correo" />
                                    <button className="btn ms-2 text-white text-center fw-bold fs-4">Empezar <i className="bi bi-chevron-right text-white"></i></button>

                                </div>
                            </div>
                            <div className="col-md-2 col-1"></div>
                        </div>
                        <div className="col-md-2 col-1"></div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <ul>
                        <li className="ps-2 pb-3">¿Preguntas? Llama al <a href="">900-759-106</a></li>
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
                            <svg width="16" height="16" viewBox="0 0 16 16" mlns="http://www.w3.org/2000/svg" className="position-absolute mt-2 ms-2 default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="white"></path></svg>
                            <select className="form-select text-white text-center" defaultValue="Español">
                                <option >Español</option>
                                <option value="1">English</option>
                            </select>
                        </div>
                        <p className="mt-5">Netflix Colombia</p>
                    </div>
                </div>
            </footer >
        </>

    );
}

export default NavBar;

