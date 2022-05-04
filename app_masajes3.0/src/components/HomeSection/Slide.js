import React, { useState } from "react"
import Data from "./Data"

const  Slide =  ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <>
        <section className='slider'>
            <div className='control-btn'>
            <button className='prev' onClick={prevSlide}>
                <i className='fas fa-caret-left'></i>
            </button>
            <button className='next' onClick={nextSlide}>
                <i className='fas fa-caret-right'></i>
            </button>
            </div>

            {Data.map((slide, index) => {
            return (
                <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && <img src={slide.images} alt='Home Image' />}
                </div>
            )
            })}
        </section>

        <section className='slide-form'>
            <div className='container'>
                <h2>Disfrute de sus servicios</h2>
                <span>Buscar y reservar un tipo de servicio</span>

                <form action=''>
                    <input type='text' placeholder='Nombre Especialista' />
                    <div className='flex_space'>
                        <input type='date' placeholder='Fecha de Servicio' />
                        <input type='time' placeholder='Hora de Servicio' />
                    </div>
                    <div className='flex_space'>
                        <input type='number' placeholder='Número de Contacto' />
                        <input type='text' placeholder='Dirección personal' />
                    </div>
                    <input type='text' placeholder='Comentario Extra o Sugerencia' />
                    <input type='Submit' value='Search' className='submit' />
                </form>
            </div>
    </section>
</>
)
}
export default Slide