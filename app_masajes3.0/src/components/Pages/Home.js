import React from 'react';
import DestinationHome from '../HomeSection/Serviccan/ServicessHome';
import Hero from "../HomeSection/Hero";
// import '../../App.js'
import "../HomeSection/Home.css"
import HomeAbout from '../HomeSection/HomeAbout';
import MasPopular from '../HomeSection/Popular/MasPopular';



const Home = () =>  {
return (
    <>
        <Hero/>
        <HomeAbout/>
        <MasPopular/>
        <DestinationHome/>
    </>
)
}

export default Home