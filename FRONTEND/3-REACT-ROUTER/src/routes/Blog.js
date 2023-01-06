import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <p>This is the BLOG component</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Blog;