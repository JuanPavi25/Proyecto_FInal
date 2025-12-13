import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function MainNavbar({ notifications = [], onLogout = () => { } }) {
    const navigate = useNavigate()
    const location = useLocation()

    const goToSection = (e, sectionId) => {
        e.preventDefault()
        const scrollToId = () => {
            const el = document.getElementById(sectionId)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }

        if (location.pathname !== '/main') {
            navigate('/main')
            // wait a bit for the page to render, then scroll
            setTimeout(scrollToId, 300)
        } else {
            scrollToId()
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-black">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); navigate('/') }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                        height="30"
                        alt="Netflix Logo"
                        loading="lazy"
                    />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home" onClick={(e) => { e.preventDefault(); navigate('/') }}>
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#series" onClick={(e) => goToSection(e, 'series')}>
                                Series
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#accion" onClick={(e) => goToSection(e, 'accion')}>
                                Películas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#recientes" onClick={(e) => goToSection(e, 'recientes')}>
                                Recién Añadido
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Mi lista
                            </a>
                        </li>
                    </ul>

                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control bg-dark border-0 text-white-50"
                            placeholder="Búsqueda"
                            aria-label="Buscar"
                        />
                        <button className="bg-black border-0">
                            <span className="input-group-text border-0 bg-black">
                                <i className="fas fa-search text-white"></i>
                            </span>
                        </button>
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#niños" onClick={(e) => goToSection(e, 'niños')}>
                                Niños
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle hidden-arrow"
                                href="#"
                                id="notificationsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-bell">
                                    <span className="position-absolute top-5 start-80 translate-middle badge rounded-pill badge-dark">
                                        {notifications.length}
                                        <span className="visually-hidden"></span>
                                    </span>
                                </i>
                            </a>

                            <ul
                                className="dropdown-menu dropdown-menu-end notifications-list p-3 scrollable-dropdown"
                                aria-labelledby="notificationsDropdown"
                            >
                                {notifications.map((notif, idx) => (
                                    <li key={notif.id}>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img
                                                    src={notif.image}
                                                    height="80"
                                                    width="140"
                                                    className="d-block"
                                                    alt={notif.subtitle}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="col-md">
                                                <p className="h6 mb-1">{notif.title}</p>
                                                <p className="h5 mb-1">{notif.subtitle}</p>
                                                <span className="small">{notif.date}</span>
                                            </div>
                                        </div>
                                        {idx < notifications.length - 1 && (
                                            <hr className="dropdown-divider bg-white mt-2" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle hidden-arrow"
                                href="#"
                                id="userDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                                    className="rounded-circle img-fluid"
                                    height="25"
                                    width="25"
                                    alt="User Avatar"
                                />
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end p-3" aria-labelledby="userDropdown">
                                <li className="dropdown-item my-2 d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                                        className="rounded-circle img-fluid me-1"
                                        height="25"
                                        width="25"
                                        alt="Avatar 1"
                                    />
                                    <span>Juan Camilo</span>
                                </li>
                                <li className="dropdown-item my-2 d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                                        className="rounded-circle img-fluid me-1"
                                        height="25"
                                        width="25"
                                        alt="Avatar 2"
                                    />
                                    <span>Christian</span>
                                </li>
                                <li className="dropdown-item my-2 d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                                        className="rounded-circle img-fluid me-1"
                                        height="25"
                                        width="25"
                                        alt="Avatar 3"
                                    />
                                    <span>Baljeet</span>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#profiles">
                                        Adm. Perfiles
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider bg-white" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#account">
                                        Cuenta
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#help">
                                        Ayuda
                                    </a>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={onLogout}>
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
