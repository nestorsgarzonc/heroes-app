import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { authContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    const { user } = useContext(authContext);
    console.log(user);
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    {
                        user.logged ?
                            <Redirect to="/login" />
                            :
                            <Route component={LoginScreen} />
                    }
                </Switch>
            </>
        </Router>
    )
}
