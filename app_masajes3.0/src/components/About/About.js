import React from 'react'
import AboutCard from './AboutCard'
import "./About.css"
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const About=()=> {
return (
    <>
    <HeadTitle/>
        <section className='about top'>
            <div className="container">
                <AboutCard/>
            </div>
        </section>

        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>Nuestras <span>Características</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <button className='secondary-btn'>
                    Saber más <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
                <div class="row image">
                <img src="/images/feature-1.jpg" alt=""/>
                <div className='control-btn'>
                    <button className='prev'>
                        <i className='fas fa-play'></i>
                    </button>
                </div>
            </div>
            </div>
        </section>
    </>
)
}

export default About