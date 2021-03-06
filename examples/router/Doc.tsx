import React, {Fragment} from 'react';
import { Switch, Redirect } from 'react-router-dom';
import DocProtectRoute from '../components/DocProtectRoute';
import { getDocRouters } from './routerSplit';
import '../styles/docBase.scss';
import Header from "../components/Header";

const docRouters = getDocRouters();

export default class Doc extends React.Component<RouteProps, any> {
  getAvailableRouter() {
    const { match } = this.props;
    return docRouters.map((route: any) =>
      <DocProtectRoute {...this.props} key={route.pathname} exact={!route.notExact} path={`${match.path}${route.pathname}`} component={route.component}/>);
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <Switch>
          {this.getAvailableRouter()}
          <Redirect to="/doc" />
        </Switch>
      </Fragment>
    );
  }
}
