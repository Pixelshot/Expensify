import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            {/* exact={true} will only render the page if the URL entered matches the exact path(in this case it's path="/") */}
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={PageNotFound} />
            {/* path is optional */}
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;