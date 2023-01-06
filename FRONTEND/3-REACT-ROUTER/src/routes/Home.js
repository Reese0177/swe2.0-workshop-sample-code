import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>This is the HOME component</p>
            <Link to="/about">About</Link> | <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Home;