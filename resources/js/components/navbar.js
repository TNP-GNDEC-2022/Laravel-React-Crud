import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                Lravel-ReactJS
            </Link>
            <ul class="nav justify-content-end navUl">
                <li class="nav-item">
                    <Link class="nav-link text-white" to="/">
                        View Post
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-white" to="/addPosts">
                        Create Posts
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default navbar;
