import React from 'react'
import "./About.css"

const AboutCard = () => {
return (
    <>
    <div className='aboutCard  flex_space'>
        <div className='row row1'>
            <h4>Sobre la Empresa</h4>
            <h1>
                Nosotros <span> brindamos salud</span> para potenciar tu vida
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <button className='secondary-btn'>
            Saber más <i className="fas fa-long-arrow-alt-right"></i>
            </button>
        </div>
        <div class="row image">
            <img src="/images/about-1.jpg" alt=""/>
            <div className='control-btn'>
                    <button className='prev'></button>
                <i className='fas fa-play'></i>
            </div>
        </div>
    </div>
    
    </>
)
}

export default AboutCard