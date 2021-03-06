import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {navList} from '../../utils/navMenu';
import './quickStart/styles/demo.scss';

export default class HomeDemo extends React.Component {
  render() {
    return <div className="home-demo">
      {
        navList.map((item: any) =>
          <Fragment key={item.title}>
            <h3 className="home-list-title">{item.title}</h3>
            {item.children.map((child: any) =>
              <Link to={`/demo${child.path}`} className="home-child-list" key={child.title}>
                <p className="child-list-title">{child.title}</p>
                <p className="child-list-description">{child.description}</p>
              </Link>)}
          </Fragment>)
      }
    </div>;
  }
}
