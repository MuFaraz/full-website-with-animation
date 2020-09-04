import React from 'react';
import web from './images/abc.png';
import { Link } from 'react-router-dom';
import Common from './Common';
const About = () => {
    return (
        <>
            <Common name="Welcome to About" imgsrc={web} linkbtn="/contact" btnName="Contact"/>
        </>
    )
}
export default About;