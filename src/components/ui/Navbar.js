import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { authContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {
    const { user, dispatch } = useContext(authContext)
    const history = useHistory()
    const handleLogout = () => {
        dispatch({
            type: types.logout,
        })
        history.replace('/login')
    }

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
            <span className='mx-2'>{user.name}</span>
            <button
                className="text-white"
                onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    )
}