import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { SearchScreen } from '../../search/SearchScreen'
import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from '../heroes/HeroScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { Navbar } from './Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/hero/:heroeId' component={HeroScreen} />
                    <Route exact path='/search' component={SearchScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
