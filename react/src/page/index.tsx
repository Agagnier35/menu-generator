import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Page404 from './404';
import HomePage from './home';
import RecipesPage from './recipe';
import { GlobalStyle, Nav } from './style';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipes">Recipes</NavLink>
                    </li>
                </ul>
            </Nav>
            <Switch>
                <Route path="/recipes">
                    <RecipesPage />
                </Route>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route render={() => <Page404 />} />
            </Switch>
        </Router>
    );
};

export default App;
