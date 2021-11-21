import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from "./compoments/navbar";
import {TodoPages} from "./Pages/TodoPages";
import {AboutPage} from "./Pages/AboutPage";




function App() {

    return (
        <BrowserRouter>
        <div className="container">
            <Navbar/>
            <Switch>
                <Route component={TodoPages} path="/" exact/>
                <Route component={AboutPage} path="/about"/>
            </Switch>
            <h1> True</h1>
        </div>
        </BrowserRouter>
    );
}

export default App;
