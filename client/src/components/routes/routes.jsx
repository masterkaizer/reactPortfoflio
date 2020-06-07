import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contacts from "../contact/contact";

class Routes extends React.Component {

    render() {
        return (
            <>
                {this.routesToPages()}
            </>
        );
    }

    routesToPages = () => {
        return (
            <>
                <Switch>
                    <Route exact path="/" render={() => (<About />)} />
                    <Route path="/portfolio" render={props => (<Portfolio />)} />
                    <Route path="/about" render={props => (<About />)} />
                    <Route path="/contact" render={props => (<Contacts />)} />
                </Switch>
            </>
        )
    }
}

export default Routes;
