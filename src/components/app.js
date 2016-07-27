import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
    <div className="mdl-js-layout">
        <div className="mdl-js-layout">
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Investigation</span>
            <ul className="demo-list-icon mdl-list">
              <li className="mdl-list__item">
                <a className="mdl-list__item-primary-content mdl-navigation__link" href="http://angular-investigation.surge.sh">
                Angular 2
            </a>
              </li>
              <li className="mdl-list__item">
                <a className="mdl-list__item-primary-content mdl-navigation__link" href="http://react-investigation.surge.sh">
                React
              </a>
              </li>
              <li className="mdl-list__item">
                <a className="mdl-list__item-primary-content mdl-navigation__link" href="http://aurelia-investigation.surge.sh">
                Aurelia
              </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mdl-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <header className="header_color mdl-layout__header">
            <div className="mdl-layout__header-row header_color">
              <Link to="/" className="mdl-navigation__link mdl-layout-title">React Investigation</Link>
                <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation">
                      <Link to="/" className="mdl-navigation__link">Widgets</Link>
                      <Link to="/git" className="mdl-navigation__link">Git</Link>
                      <Link to="/about" className="mdl-navigation__link">About</Link>
                  </nav>
            </div>
          </header>
         </div>
         <div className="mdl-grid"> 
            <main className="mdl-layout__content page-content">
                {this.props.children}
            </main>
          </div>
      </div>
    );
  }
}
