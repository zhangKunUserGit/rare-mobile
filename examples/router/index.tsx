import React, {Fragment} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {isMobile} from "../utils/assert";
import lazyLoad from '../components/LazyLoad';

function getRouterByUserAgent() {
  if (!isMobile()) {
    return (<Fragment>
      <Switch>
        <Route path="/doc" component={lazyLoad('router/Doc')}/>
        <Route path="/demo" component={lazyLoad('router/Demo')}/>
        <Redirect to="/doc"/>
      </Switch>
    </Fragment>);
  }
  return (
    <Fragment>
      <Switch>
        <Route path="/demo" component={lazyLoad('router/Demo')}/>
        <Redirect to="/demo"/>
      </Switch>
    </Fragment>
  );
}

const AppRouter = getRouterByUserAgent;
export default AppRouter;
