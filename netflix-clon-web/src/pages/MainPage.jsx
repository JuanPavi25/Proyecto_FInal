import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

const MainPage = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Recién agregado",
            subtitle: "Muerte por un rayo",
            date: "Noviembre 6 2025",
            image:
                "https://www.lavanguardia.com/peliculas-series/images/all/serie/backdrops/2025/11/serie-245219/w1280/msrMvALBcBkb80R62t9bagRFspW.jpg",
        },
        {
            id: 2,
            title: "Recién Agregado",
            subtitle: "Terrazza Sentimento: Del esplendor al horror",
            date: "Noviembre 5 2025",
            image: "https://pbs.twimg.com/media/G5Lp5SfWAAEDREi.jpg",
        },
        {
            id: 3,
            title: "Recién Agregado",
            subtitle: "Simplemente Alicia",
            date: "Noviembre 5 2025",
            image:
                "https://cloudfront-us-east-1.images.arcpublishing.com/semana/X4TTFDIRLRGEBPDQNG5UF63W2A.jpg",
        },
        {
            id: 4,
            title: "Recién Agregado",
            subtitle: "En el mar y en la Guerra",
            date: "2025",
            image:
                "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXPuSUgKeT09-so0SziWyI9mJ8CHMcrKC2X4HOYUb92zdF7y4pumfBI0GErNZOMvKcAsfk_-12ns0yOmNlJ8FRSrSTNlWuXQDU4c.jpg?r=f33",
        },
        {
            id: 5,
            title: "Recién Agregado",
            subtitle: "El juego del calamar: El desafío",
            date: "Noviembre 4 2025",
            image:
                "https://www.eluniverso.com/resizer/BJcWLvTDWQxPxXH2yOKVmGRnp-Q=/arc-anglerfish-arc2-prod-eluniverso/public/VH57MLFUDNARFGDIW76XQOEYRQ.png",
        },
        {
            id: 6,
            title: "Recién Agregado",
            subtitle: "Heweliusz",
            date: "Noviembre 5 2025",
            image:
                "https://static.prsa.pl/images/4f81f987-33e4-448f-8f11-b99848ebe987.jpg",
        },
    ]);

    // Estado para almacenar los datos de las películas y series
    const [moviesData, setMoviesData] = useState({
        action: [],
        horror: [],
        series: [],
        kids: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Datos del carrusel principal (pueden seguir siendo estáticos o cargarse de otra API)
    const carouselImages = [
        {
            src: "https://wallpapers.com/images/featured/peaky-blinders-mf0te5aaoy07nn99.jpg",
            alt: "Peaky Blinders",
        },
        {
            src: "https://m.media-amazon.com/images/S/pv-target-images/92c2c9a3ae36f9b5aa3eb98a74846ac2c7dd56b403ef07cbf8bc2f49cea2b80a.jpg",
            alt: "Tom Cruise Jack Reacher Sin Regreso",
        },
        {
            src: "https://images.ctfassets.net/4cd45et68cgf/3BJQrujAXLeXXsWXnolmvB/28845a87ecb25a0609c2e9faec57736c/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpg?",
            alt: "Película popular",
        },
        {
            src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/07/witcher-netflix-2402121.jpg",
            alt: "Película popular",
        },
    ];

    // useEffect para cargar los datos cuando el componente se monta
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // URLs para cada categoría
                const urls = {
                    action:
                        "https://api.themoviedb.org/3/discover/movie?api_key=ccb0b14e8f98572713d8a1ce7dbe10e0&with_genres=28&language=es-ES",
                    horror:
                        "https://api.themoviedb.org/3/discover/movie?api_key=ccb0b14e8f98572713d8a1ce7dbe10e0&with_genres=27&language=es-ES",
                    series:
                        "https://api.themoviedb.org/3/discover/tv?api_key=ccb0b14e8f98572713d8a1ce7dbe10e0&language=es-ES",
                    kids: "https://api.themoviedb.org/3/discover/movie?api_key=ccb0b14e8f98572713d8a1ce7dbe10e0&with_genres=16&certification_country=US&certification.lte=G&language=es-ES",
                };

                // Función para adaptar los datos de la API a nuestro formato
                const adaptMovieData = (movie) => ({
                    id: movie.id,
                    title: movie.title || movie.name, // Las series usan 'name' en lugar de 'title'
                    description: movie.overview,
                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                });

                // Realizar todas las peticiones a la API en paralelo
                const responses = await Promise.all(
                    Object.values(urls).map((url) => fetch(url).then((res) => res.json()))
                );

                const [actionData, horrorData, seriesData, kidsData] = responses;

                // Actualizar el estado con los datos adaptados
                setMoviesData({
                    action: actionData.results.map(adaptMovieData),
                    horror: horrorData.results.map(adaptMovieData),
                    series: seriesData.results.map(adaptMovieData),
                    kids: kidsData.results.map(adaptMovieData),
                });
            } catch (e) {
                setError(e);
                console.error("Error fetching movies data:", e);
            } finally {
                setLoading(false);
            }
        };

        setLoading(true);
        fetchMovies();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar

    // Combinar y mezclar todas las películas y series
    const allMovies = Object.values(moviesData)
        .flat() // Aplana todos los arreglos de categorías en uno solo
        .sort(() => 0.5 - Math.random()); // Mezcla aleatoriamente

    const handleLogout = () => {
        navigate("/");
    };

    if (loading) {
        return <div className="loading-message">Cargando películas...</div>;
    }

    if (error) {
        return (
            <div className="error-message">
                Error al cargar las películas: {error.message}
            </div>
        );
    }

    const CardMovie = ({ movie }) => (
        <div className="card card-scroll text-center text-white">
            <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                loading="lazy"
            />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p
                    className="card-text description-scroll"
                    style={{
                        maxHeight: "180px", // Limita la altura máxima de la descripción
                        overflowY: "auto", // Añade scroll vertical si el texto se desborda
                        textAlign: "left", // Mejora la legibilidad del texto con scroll
                    }}
                >
                    {movie.description}
                </p>
            </div>
        </div>
    );

    const MovieSection = ({ title, id, movies }) => (
        <>
            <br />
            <h2 id={id}>{title}</h2>
            <br />
            <div className="scroll-container">
                {movies.map((movie) => (
                    <CardMovie key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );

    return (
        <>
            <MainNavbar notifications={notifications} onLogout={handleLogout} />

            {/* Main Carousel */}
            <div
                id="mainCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {carouselImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`carousel-item ${idx === 0 ? "active" : ""}`}
                        >
                            <img
                                src={img.src}
                                className="d-block w-100"
                                alt={img.alt}
                                loading="lazy"
                            />
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
            <MovieSection
                title="Películas de Acción"
                id="accion"
                movies={moviesData.action}
            />
            <MovieSection
                title="Películas de Terror"
                id="terror"
                movies={moviesData.horror}
            />
            <MovieSection title="Series" id="series" movies={moviesData.series} />
            <MovieSection
                title="Recién Añadidos"
                id="recientes"
                movies={allMovies.slice(0, 9)}
            />
            <MovieSection title="Niños" id="niños" movies={moviesData.kids} />

            <Footer />
        </>
    );
};

export default MainPage;
