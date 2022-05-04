import React from 'react'
import PCard from "./PCard"
import "./MasPopular.css"
export const MasPopular = () => {
return (
    <>
    <section className='popular top'> 
        <div className="full_container">
            <div className='heading'>
                <h1>Paquetes Más Populares</h1>
                <div className='line'></div>
                <div className='content'>
                    <PCard />
                </div>
            </div>
        </div>
    </section>
    
    </>
)
}

export default MasPopular