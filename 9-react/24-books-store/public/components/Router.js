import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

class Router extends React.Component{
    render() {
        return(
                <BrowserRouter>
                <div>
                    {this.props.children}
                    <Route path="/" exact component={null} />
                    <Route path="/contact" exact component={null} />
                    <Route path="/aboutus" exact component={null} />
                </div>
                </BrowserRouter>
        )
    }
}

export default Router