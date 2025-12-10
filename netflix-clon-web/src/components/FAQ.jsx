import React from 'react'

const faqData = [
    {
        question: '¿Qué es Netflix?',
        answer:
            'Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet. Puedes ver todo lo que quieras, cuando quieras, por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!'
    },
    {
        question: '¿Cuánto cuesta Netflix?',
        answer:
            'Disfruta de Netflix en tu smartphone, tableta, Smart TV, ordenador o dispositivo de streaming, todo por una tarifa mensual fija. Planes desde 5,49 € a 17,99 € al mes. Sin cargos adicionales ni contratos.'
    },
    {
        question: '¿Dónde puedo ver Netflix?',
        answer:
            'Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación de Netflix, entre ellos, smart TV, smartphones, tabletas, reproductores multimedia de streaming y consolas de juegos. También puedes descargar tus series favoritas con la aplicación de iOS, Android o Windows 10.'
    },
    {
        question: '¿Cómo cancelo?',
        answer:
            'Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento.'
    },
    {
        question: '¿Qué puedo ver en Netflix?',
        answer:
            'Netflix dispone de una amplia biblioteca de originales de Netflix galardonados, títulos de anime, series de TV, documentales, largometrajes y otros contenidos. Ve todo el contenido que quieras, cuando quieras.'
    }
]

const FAQ = () => {
    return (
        <section>
            <div className="faq">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="mb-5">Preguntas frecuentes</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-2 col-1" />
                    <div className="col-lg-6 col-md-8 col-10 p-0">
                        {faqData.map((item, idx) => {
                            const id = `faq-collapse-${idx}`
                            return (
                                <div key={id} className="mb-2">
                                    <a
                                        className="btn text-white"
                                        data-bs-toggle="collapse"
                                        href={`#${id}`}
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls={id}
                                    >
                                        {item.question}
                                    </a>

                                    <div className="collapse multi-collapse" id={id}>
                                        <div className="card card-body">{item.answer}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-3 col-md-2 col-1" />
                </div>
            </div>
        </section>
    )
}

export default FAQ
