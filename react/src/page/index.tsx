import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Page404 from './404';
import MainPage from './main-page';
import SecondPage from './second-page';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/second">Second</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/second">
                        <SecondPage />
                    </Route>
                    <Route path="/" exact>
                        <MainPage />
                    </Route>
                    <Route render={() => <Page404 />} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
