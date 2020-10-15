import React from 'react';
import logo from "../images/logo.svg";
import { NavLink } from 'react-router-dom';

const navs = [
    {
        path: '/',
        name: "Home Security"
    },
    {
        path: '/Business',
        name: "Business Security"
    }
]

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img src={logo} alt="AD Choices" />
                </li>
                {navs.map((navItem, i) => (
                    <li key={i} >
                        <NavLink exact to={navItem.path} activeClassName="text-purple-100">{navItem.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;