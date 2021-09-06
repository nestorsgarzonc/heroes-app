import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="flex px-8 py-4 bg-blue-500">
            <Link
                className="flex-auto text-white hover:bg-red"
                to="/"
            >
                Asociaciones
            </Link>
            <NavLink
                activeClassName="active"
                className="flex-auto  text-white"
                exact
                to="/marvel"
            >
                Marvel
            </NavLink>
            <NavLink
                activeClassName="active"
                className="flex-auto text-white"
                exact
                to="/dc"
            >
                DC
            </NavLink>
            <NavLink
                activeClassName="active"
                className="flex-auto text-white"
                exact
                to="/search"
            >
                Search
            </NavLink>

            <NavLink
                activeClassName="active"
                className="text-white"
                exact
                to="/login"
            >
                Logout
            </NavLink>
        </nav>
    )
}