import React from 'react'
import AllItem from '../../Servicess/AllItem'
import "../Popular/MasPopular.css"

const ServicessHome = () => {
return (
    <>
        <section className='popular top'>
        <div className='full_container'>
        <div className='heading'>
            <h1>Servicios Más Populares</h1>
            <div className='line'></div>
        </div>

        <div className='content'>
            <AllItem />
        </div>
        </div>
    </section>
    </>
)
}

export default ServicessHome