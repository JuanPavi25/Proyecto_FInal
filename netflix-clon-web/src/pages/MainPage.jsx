import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/MainPage.css'
import Footer from '../components/Footer'

const MainPage = () => {
    const navigate = useNavigate()
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Recién agregado',
            subtitle: 'Muerte por un rayo',
            date: 'Noviembre 6 2025',
            image: 'https://www.lavanguardia.com/peliculas-series/images/all/serie/backdrops/2025/11/serie-245219/w1280/msrMvALBcBkb80R62t9bagRFspW.jpg'
        },
        {
            id: 2,
            title: 'Recién Agregado',
            subtitle: 'Terrazza Sentimento: Del esplendor al horror',
            date: 'Noviembre 5 2025',
            image: 'https://pbs.twimg.com/media/G5Lp5SfWAAEDREi.jpg'
        },
        {
            id: 3,
            title: 'Recién Agregado',
            subtitle: 'Simplemente Alicia',
            date: 'Noviembre 5 2025',
            image: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/X4TTFDIRLRGEBPDQNG5UF63W2A.jpg'
        },
        {
            id: 4,
            title: 'Recién Agregado',
            subtitle: 'En el mar y en la Guerra',
            date: '2025',
            image: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXPuSUgKeT09-so0SziWyI9mJ8CHMcrKC2X4HOYUb92zdF7y4pumfBI0GErNZOMvKcAsfk_-12ns0yOmNlJ8FRSrSTNlWuXQDU4c.jpg?r=f33'
        },
        {
            id: 5,
            title: 'Recién Agregado',
            subtitle: 'El juego del calamar: El desafío',
            date: 'Noviembre 4 2025',
            image: 'https://www.eluniverso.com/resizer/BJcWLvTDWQxPxXH2yOKVmGRnp-Q=/arc-anglerfish-arc2-prod-eluniverso/public/VH57MLFUDNARFGDIW76XQOEYRQ.png'
        },
        {
            id: 6,
            title: 'Recién Agregado',
            subtitle: 'Heweliusz',
            date: 'Noviembre 5 2025',
            image: 'https://static.prsa.pl/images/4f81f987-33e4-448f-8f11-b99848ebe987.jpg'
        }
    ])

    const carouselImages = [
        {
            src: 'https://wallpapers.com/images/featured/peaky-blinders-mf0te5aaoy07nn99.jpg',
            alt: 'Peaky Blinders'
        },
        {
            src: 'https://m.media-amazon.com/images/S/pv-target-images/92c2c9a3ae36f9b5aa3eb98a74846ac2c7dd56b403ef07cbf8bc2f49cea2b80a.jpg',
            alt: 'Tom Cruise Jack Reacher Sin Regreso'
        },
        {
            src: 'https://images.ctfassets.net/4cd45et68cgf/3BJQrujAXLeXXsWXnolmvB/28845a87ecb25a0609c2e9faec57736c/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpg?',
            alt: 'Película popular'
        },
        {
            src: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/07/witcher-netflix-2402121.jpg',
            alt: 'Película popular'
        }
    ]

    const moviesData = {
        action: [
            {
                id: 1,
                title: 'Jhon Wick 1',
                description: 'Un asesino retirado regresa para vengarse de quienes le arrebataron todo.',
                image: 'https://i.pinimg.com/736x/f3/f6/16/f3f616da39ed05d2a0ba77be99ed525d.jpg'
            },
            {
                id: 2,
                title: 'Mad Max: Fury Road',
                description: 'En un mundo post-apocalíptico, Max une fuerzas con Furiosa para escapar de un tirano.',
                image: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                id: 3,
                title: 'Extraction',
                description: 'Un mercenario debe rescatar al hijo de un criminal internacional en Bangladesh.',
                image: 'https://m.media-amazon.com/images/M/MV5BNDBhMmI3OWYtZTA2Ny00Y2RjLTliMWQtYWY5MGIwN2RlZGFjXkEyXkFqcGc@._V1_.jpg'
            },
            {
                id: 4,
                title: 'Teherán',
                description: 'Tras un atentado letal con un coche bomba, un policía de Delhi descubre una conspiración secreta que amenaza con destruir la paz mundial.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbw7TK-yC2DZVcj2I7JJHoTYlAjuvKcEk5i6QDq6ajbowa7E5'
            },
            {
                id: 5,
                title: 'Riesgo bajo cero',
                description: 'Un conductor, especializado en terrenos helados, intenta el rescate de unos trabajadores atrapados en una mina de diamantes.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQH9qm79qPTlpKnh7JBgBDkXtzo8y72FB0sCk9vg9Qs3kJL9QY'
            },
            {
                id: 6,
                title: 'Agente bajo fuego',
                description: 'El agente del servicio secreto Mike Banning es acusado injustamente de intentar asesinar al presidente de Estados Unidos.',
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQO5KBHtxfe06uGLSv-3MWxth4Qta5A7tIyfYB9-qj44xrpWoUR'
            },
            {
                id: 7,
                title: 'Zona de riesgo',
                description: 'En un futuro cercano, un piloto de drones y un oficial androide se embarcan en una misión para detener un ataque nuclear.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuuL_Q5sXO8WPlnqwswbqonAj6IxpwLMxme3j5SJBqKdDS25GZ'
            },
            {
                id: 8,
                title: 'Amigos de armas',
                description: 'Un joven ofrece a su amigo de la infancia la oportunidad de ganar mucho dinero al convertirse en un vendedor internacional de armas.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBVUWUmIM1FikfT6VDskc2AVnkm1pi1hZZxr1vwuFPUHy8ZbS'
            }
        ],
        horror: [
            {
                id: 1,
                title: '¡Huye!',
                description: 'Un joven afroamericano visita a la familia de su novia durante el fin de semana, eventualmente la historia toma un rumbo escalofriante.',
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgOmr7Ejs1GxF03FbLOtsDSh1j561fvcPRSncnDd1cllNj2f9g'
            },
            {
                id: 2,
                title: 'La monja',
                description: 'Una monja se suicida en una abadía rumana y el Vaticano envía a un sacerdote y una novicia a investigar lo sucedido.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNAsGSl7GzmL-vJuPF-FVf7to6Zf0BN1EnZYaMgOdRudl_aLW'
            },
            {
                id: 3,
                title: 'It: capítulo dos',
                description: 'Los miembros ya adultos del Club de los Perdedores vuelven a Derry para derrotar a Pennywise de una vez por todas.',
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6Nhe7XpBAd8O2RsmxZzlTwPVRGoBy0X3DPBSFVWv1Lb2puqVt'
            },
            {
                id: 4,
                title: 'La maldición de la llorona',
                description: 'Los Ángeles, década de 1970. Un legendario fantasma que se oculta en la oscuridad de la noche aterra a los niños.',
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsBLYvKncmKVxzPT6e2AYhs0E_QDTqQKXP-TdTFiwNIAI5o6_R'
            },
            {
                id: 5,
                title: 'Escape Room: sin salida',
                description: 'Seis personas quedan atrapadas en un escape room cuyo creador ha diseñado una trampa mortal en cada habitación.',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKcxAdum8ANAleBe8yZvieEOXTfWv8f2tiwlf0vBvImyUJRDpV'
            },
            {
                id: 6,
                title: 'La Masacre de Texas',
                description: 'Un grupo de jóvenes se pierde en Texas y termina encontrándose con asesinos dementes que los persiguen con motosierras.',
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRw5wDPgGZqeqrR_78cYiuc7po8bIyF1vzhYiBHyPXaOSJ1BUbS'
            },
            {
                id: 7,
                title: 'The Purge: Anarchy',
                description: 'El Gobierno estadounidense permite cometer atrocidades durante una noche para reducir la criminalidad el resto del año.',
                image: 'https://play-lh.googleusercontent.com/hmj4CNRvrAJUMq1PLfhIpIPIWmw_Z2P_IeNLkR92stHYFa9LdImaVeL6eH7w99fOqPJSlArbDTt46lmZ45M'
            },
            {
                id: 8,
                title: 'Feliz día de tu muerte 2',
                description: 'Tree Gelbman vuelve a entrar en el bucle temporal para averiguar por qué entró la primera vez. Sin embargo, Lori ha resucitado y pretende vengarse de Tree',
                image: 'https://m.media-amazon.com/images/M/MV5BYjlhZjc0OGYtZGViZC00YjE4LTgwMmYtMjYxNTE4NTI0NjE0XkEyXkFqcGc@._V1_.jpg'
            }
        ],
        series: [
            {
                id: 1,
                title: 'Stranger Things',
                description: 'Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo.',
                image: 'https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                id: 2,
                title: 'Peaky Blinders',
                description: 'En Birmingham, una pandilla de gánsters callejeros asciende hasta convertirse en los reyes de la clase obrera.',
                image: 'https://resizing.flixster.com/7fJVuFxPUx7MiREgjaEY5Aj9bxc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12819972_b_v7_aa.jpg'
            },
            {
                id: 3,
                title: 'El Joven Sheldon',
                description: 'Sheldon Cooper tiene 9 años y se salta cuatro grados para entrar directamente a la secundaria junto con su hermano mayor, menos listo que él.',
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0ZMENJjUGPp_sT9sGwJ43V5FrASav2pC7gMDIiP41W-UN54lB'
            },
            {
                id: 4,
                title: 'El robo del siglo',
                description: 'La historia de uno de los robos más grandes que se llevó a cabo en Colombia.',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2KWIjn0UFw5coA_K-7V00E0JdeS5dI13uQ_AEK_w7Xq1LqEJl'
            },
            {
                id: 5,
                title: 'El Chapo',
                description: 'La historia de Joaquín Guzmán, conocido como "El Chapo", uno de los criminales más infames del mundo.',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGHZlJ7E15s2GYtWbJuw44qCY-DJ-G3v6Nq0IOg6qPVRiUGu_n'
            },
            {
                id: 6,
                title: 'Fubar',
                description: 'Un agente de la CIA a punto de jubilarse descubre un secreto familiar y es obligado a trabajar una vez más.',
                image: 'https://pics.filmaffinity.com/fubar-886920214-mmed.jpg'
            },
            {
                id: 7,
                title: 'Narcos',
                description: 'La historia del ascenso y caída del capo colombiano Pablo Escobar y de los agentes de la DEA que lucharon para atraparlo.',
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiLzRKo-uluXxDzIINYpNUg7CtFDX-0FDdYBPFlPA2LHErvg79'
            },
            {
                id: 8,
                title: 'Pablo Escobar: El Patrón del Mal',
                description: 'Una dramatización de la vida del narcotraficante más temido en la historia de Colombia, Pablo Escobar Gaviria',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhwMQyeRCHr7M8EFNldF-neBdWH-YgWliFfwDHwYB9ngaTQd-'
            }
        ],
        kids: [
            {
                id: 1,
                title: 'Los tipos malos',
                description: 'Esta es la película original que narra cómo una banda de animales criminales intenta reformarse.',
                image: 'https://es.web.img2.acsta.net/pictures/21/12/14/15/42/0496448.jpg'
            },
            {
                id: 2,
                title: 'La casa de Muñecas de Gabby',
                description: 'Cada episodio presenta nuevas aventuras, manualidades, canciones y soluciones de problemas. La serie fomenta una mentalidad de crecimiento, el aprendizaje a partir de los errores y el pensamiento flexible.',
                image: 'https://m.media-amazon.com/images/M/MV5BMmZjN2MxNTItMjAzYi00Y2U2LTkxYjItZWIwYzNiNjI3ZGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                id: 3,
                title: 'Shrek',
                description: 'Centrada en un ogro gruñón que vive en un pantano y termina casándose con una princesa y teniendo aventuras con sus amigos, como Asno y el Gato con Botas.',
                image: 'https://images.justwatch.com/poster/327088665/s718/shrek.jpg'
            },
            {
                id: 4,
                title: 'Sonic 2: La película',
                description: 'Sigue a Sonic mientras se une a su nuevo amigo Tails para detener al Dr. Robotnik, quien ha regresado con un nuevo aliado, Knuckles, en busca de una esmeralda poderosa.',
                image: 'https://www.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/03/posteres-espanol-personajes-sonic-2-pelicula-2646815.jpg'
            },
            {
                id: 5,
                title: 'Megamente',
                description: 'Cuenta la historia de un supervillano alienígena con una cabeza enorme y un intelecto superior que, tras derrotar a su némesis, el superhéroe Metro Man, se encuentra sin propósito y debe convertirse en un héroe él mismo.',
                image: 'https://m.media-amazon.com/images/M/MV5BMTE2YzI0ZmQtZGNiMC00NjY2LTg3ODktNDFlOTc4MmJjOGFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                id: 6,
                title: 'Hotel Transylvania 3',
                description: 'Drácula se enamora de una mujer misteriosa durante un crucero en el que toda la familia de monstruos se ha embarcado para disfrutar de unas vacaciones.',
                image: 'https://www.sonypictures.com.co/sites/colombia/files/2022-05/HotelTransylvania3SummerVacation_2018_1400x2100_MEX.jpg'
            },
            {
                id: 7,
                title: 'Mi Villano Favorito',
                description: 'La historia sigue a Gru, un supervillano que planea robar la luna, pero se encuentra con un desafío inesperado cuando tres niñas huérfanas se cruzan en su camino y despiertan su lado paternal.',
                image: 'https://m.media-amazon.com/images/S/pv-target-images/9cfb58a8066fbe4e1114f82336afda42be42dd76ecb222f15eef5163b9688f28.jpg'
            },
            {
                id: 8,
                title: 'Peppa Pig',
                description: 'Se centra en la vida cotidiana de Peppa, una cerdita, su hermano George, Mamá Pig y Papá Pig, y sus aventuras que siempre terminan con risas y, a menudo, saltando en charcos de barro.',
                image: 'https://cdn.iview.abc.net.au/thumbs/i/X0_68c73d8a6129b_2000.jpg'
            }
        ]
    }

    const handleLogout = () => {
        navigate('/')
    }

    const CardMovie = ({ movie }) => (
        <div className="card card-scroll text-center text-white">
            <img src={movie.image} className="card-img-top" alt={movie.title} loading="lazy" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-wrap">{movie.description}</p>
            </div>
        </div>
    )

    const MovieSection = ({ title, id, movies }) => (
        <>
            <br />
            <h2 id={id}>{title}</h2>
            <br />
            <div className="scroll-container">
                {movies.map(movie => (
                    <CardMovie key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
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
                                <a className="nav-link active" aria-current="page" href="#home">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#series">
                                    Series
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#accion">
                                    Películas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#recientes">
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
                                <a className="nav-link" href="#niños">
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
                                        <button className="dropdown-item" onClick={handleLogout}>
                                            Cerrar Sesión
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Carousel */}
            <div id="mainCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {carouselImages.map((img, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                            <img src={img.src} className="d-block w-100" alt={img.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
                <button
                    title="Previo"
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                    title="Siguiente"
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* Movie Sections */}
            <MovieSection title="Películas de Acción" id="accion" movies={moviesData.action} />
            <MovieSection title="Películas de Terror" id="terror" movies={moviesData.horror} />
            <MovieSection title="Series" id="series" movies={moviesData.series} />
            <MovieSection title="Recién Añadidos" id="recientes" movies={moviesData.series.slice(0, 9)} />
            <MovieSection title="Niños" id="niños" movies={moviesData.kids} />

            <Footer/>
            
        </>
    )
}

export default MainPage
