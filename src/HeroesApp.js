import React, { useEffect, useReducer } from 'react'
import { authContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }
}

const saveUser = (state) => {
    localStorage.setItem('user', JSON.stringify(state))
}

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        saveUser(user)
    }, [user])

    return (
        <authContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </authContext.Provider>
    )
}
