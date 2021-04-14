import React from 'react'
import {Switch,Route} from "react-router-dom"
import Favorites from '../favorites-page/Favorites'
import Home from '../home-page/Home'
const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/favorites" component={Favorites}/>
        </Switch>
    )
}

export default AppRoutes
