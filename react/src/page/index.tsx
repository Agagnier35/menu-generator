import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'reflect-metadata';
import Page404 from './404';
import HomePage from './home';
import RecipesPage from './recipe';
import NewRecipePage from './recipe/new';
import { GlobalStyle, Nav } from './style';

const App = () => {
    toast.configure({ autoClose: 10000, draggable: false, closeOnClick: false, position: toast.POSITION.BOTTOM_RIGHT });

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
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/recipes/new">
                    <NewRecipePage />
                </Route>
                <Route path="/recipes">
                    <RecipesPage />
                </Route>

                <Route render={() => <Page404 />} />
            </Switch>
        </Router>
    );
};

export default App;
