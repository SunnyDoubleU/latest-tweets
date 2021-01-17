import { Route, Switch } from 'react-router-dom'
import React from 'react'
import pages from '../pages'
import Home from '../pages/index'

const renderRoutes = Object.values(pages).map((page) => (
    <Route key={page.path} exact path={page.path} component={page.component} />
))

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {renderRoutes}
        </Switch>
    )
}

export default Router
