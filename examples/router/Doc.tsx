import React, {Fragment} from 'react';
import { Switch, Redirect } from 'react-router-dom';
import DocProtectRoute from '../components/DocProtectRoute';
import { getDocRouters } from './routerSplit';
import '../styles/docBase.scss';

const docRouters = getDocRouters();

interface DocProps extends RouteProps{
}

export default class Doc extends React.Component<DocProps, any>{
  getAvailableRouter() {
    const { match } = this.props;
    return docRouters.map((route: any) => {
      return <DocProtectRoute {...this.props} key={route.pathname} exact={!route.notExact} path={`${match.path}${route.pathname}`} component={route.component}/>;
    });
  }
  render() {
    return (
      <Fragment>
        <Switch>
          {this.getAvailableRouter()}
          <Redirect to="/notFound" />
        </Switch>
      </Fragment>
    );
  }
}
