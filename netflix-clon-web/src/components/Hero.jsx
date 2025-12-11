import React from 'react'

const Hero = ({ email, setEmail, onStart }) => {
    return (
        <>
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
                        <div className="col-md-2 col-1" />

                        <div className="col-md-8 col-10 p-0 main-search">
                            <div className="d-flex mb-3 justify-content-center">
                                <label htmlFor="email-input" className="visually-hidden">Dirección de correo</label>
                                <input
                                    id="email-input"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-dark"
                                    placeholder="Dirección de correo"
                                    aria-label="Dirección de correo electrónico"
                                    autoComplete="off"
                                    required
                                />

                                <button type="submit" onClick={onStart} className="btn ms-2 text-white text-center text-capitalize fw-bold fs-4">
                                    Empezar
                                </button>
                            </div>
                        </div>

                        <div className="col-md-2 col-1" />
                    </div>
                </div>
            </div>

            {/* Features - these stay minimal here; can be moved to separate components later */}
        </>
    )
}

export default Hero
