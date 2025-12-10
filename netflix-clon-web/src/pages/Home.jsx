import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleStart = (e) => {
        e && e.preventDefault()
        const re = /^\S+@\S+\.\S+$/
        if (!re.test(email)) {
            alert('Por favor introduce una dirección de correo válida.')
            return
        }
        navigate('/main')
    }

    return (
        <>
            <NavBar />
            <Hero email={email} setEmail={setEmail} onStart={handleStart} />

            <section>
                <div className="container">
                    <div className="row align-items-center reverse">
                        <div className="col-lg-6">
                            <h2>Disfruta en tu tele</h2>
                            <p>Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Televisor mostrando la app de Netflix" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-lg-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Varios dispositivos mostrando contenidos" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Usa cualquier dispositivo</h2>
                            <p>Ve en streaming todas las películas y series en tu móvil, tableta, ordenador y televisor.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row align-items-center reverse">
                        <div className="col-lg-6">
                            <h2>Crea perfiles infantiles</h2>
                            <p>Deja que los niños vivan aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, gratis con tu suscripción.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://occ-0-358-360.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfqIddV64JsFW70ZLyiGkx_uJQMdtpWNP8g361QHR1WQSDmLmuv967PGBRIRJX9QB731ET5MlcyjW6-cYmVYL6JmtRuo6bjxD1wk.png?r=b32" alt="Perfil infantil de Netflix" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="App de Netflix en móvil" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Descárgate tus favoritas para verlas sin conexión</h2>
                            <p>Disfruta de Netflix en tierra, mar y aire…</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />

            <section>
                <div className="bottom-search">
                    <h5 className="text-center">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</h5>
                    <div className="row">
                        <div className="col-md-2 col-1"></div>
                        <div className="row w-100">

                            <div className="col-md-2 col-1"></div>
                            <div className="col-md-8 col-10 p-0 main-search">
                                <div className="d-flex mb-3 justify-content-center">
                                    <label htmlFor="email-input-bottom" className="visually-hidden">Dirección de correo</label>
                                    <input id="email-input-bottom" name="email-bottom" type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Dirección de correo electrónico" className="form-control" placeholder="Dirección de correo" required />
                                    <button type="button" onClick={handleStart} className="btn ms-2 text-white text-center fw-bold fs-4">Empezar <i className="bi bi-chevron-right text-white"></i></button>

                                </div>
                            </div>
                            <div className="col-md-2 col-1"></div>
                        </div>
                        <div className="col-md-2 col-1"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home

