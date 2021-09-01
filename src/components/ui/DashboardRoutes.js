import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../dc/DcScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { Navbar } from './Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/marvel'>
                        <MarvelScreen />
                    </Route>
                    <Route exact path='/dc'>
                        <DcScreen />
                    </Route>
                    <Route exact path='/marvel:heroeId'>
                        <MarvelScreen />
                    </Route>
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
