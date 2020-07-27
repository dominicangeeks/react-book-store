import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/About';
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const AppRouter = () => {



    return (
        <div>
            <Router>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/about" component={About}  />
                        <Route exact path="/login" component={Login}  />
                        <Route exact path="/" component={Home}  />
                        <Route exact path="/register" component={Register}  />
                        
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
