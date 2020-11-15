import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

export default function NavBar() {
        return (
            <div className="topbar">
                    <RouterLink to="/" className="nav-item">Home</RouterLink>
                    <RouterLink to="/sections/reviews" className="nav-item">Reviews</RouterLink>
                    <RouterLink to="/sections/articles" className="nav-item">Articles</RouterLink>
                    <RouterLink to="/about_this" className="nav-item">About this</RouterLink>
                    <RouterLink to="/about_me" className="nav-item">About me</RouterLink>
            </div>
        );
    } 
