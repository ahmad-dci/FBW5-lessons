import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import Home from './Home'

class Router extends React.Component{
    render() {
        return(
                <BrowserRouter>
                <div>
                   
                    <NavigationBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={null} />
                    <Route path="/aboutus" exact component={null} />
                </div>
                </BrowserRouter>
        )
    }
}

export default Router