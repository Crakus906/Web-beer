import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FAVOURITES, ROOT } from '../contacts/routes.js';

const Home = lazy(()  => import('../pages/Home/index.jsx'))
const Favourites = lazy(() => import('../pages/Favourites/index.jsx'))

const Routes = () => (
    <Suspense fallback={<div>Loader...</div>}>
        <Switch>
            <Route exact path={ROOT} component={Home} />
            <Route path={FAVOURITES} component={Favourites} />
        </Switch>
    </Suspense>
)

export default Routes;