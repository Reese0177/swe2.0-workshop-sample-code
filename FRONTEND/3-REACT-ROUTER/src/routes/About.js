import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <p>This is the ABOUT component</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About;