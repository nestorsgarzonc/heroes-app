import React, { useContext } from 'react'
import { authContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(authContext)

    const handleOnLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Juan'
            }
        })
        history.replace('/')
    }
    return (
        <div className='m-10'>
            <h1 className='font-bold text-4xl'
            >Heroes app</h1>
            <hr className='my-5' />
            <button
                className="bg-blue-500 py-2 px-5 text-white rounded"
                onClick={handleOnLogin}
            >Login</button>
        </div>
    )
}
