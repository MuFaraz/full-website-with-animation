import React from 'react';
import web from './images/abc.png';
import { Link } from 'react-router-dom';
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common name="Grow your Business with" imgsrc={web} linkbtn="/service" btnName="Get Started"/>
        </>
    )
}
export default Home;