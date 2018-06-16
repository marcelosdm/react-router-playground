import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItem} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

);

export default AppRouter;