import React from 'react';

import { NavLink } from 'react-router-dom';

const navs = [
    {
        path: '/',
        name: "Home"
    },
    {
        path: '/about',
        name: "About"
    },
    {
        path: '/contact',
        name: "Contact"
    }
]

const Nav = () => {
    return (
        <nav className="bg-purple-600 text-purple-200 text-white p-4 shadow">
            <ul className="flex space-x-4 justify-end">

                {navs.map((navItem) => (
                    <li>
                        <NavLink exact to={navItem.path} activeClassName="text-purple-100">{navItem.name}</NavLink>
                    </li>
                ))}

                {/* <li>
                    <NavLink exact to='/' activeClassName="border-b-2 border-white">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to='/about' activeClassName="border-b-2 border-white">About</NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact' activeClassName="border-b-2 border-white">Contact</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav;