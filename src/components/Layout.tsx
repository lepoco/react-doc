/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import RoutedPureComponent from './../common/RoutedPureComponent';
import withRouter from './../common/withRouter';
import IRouterProps from './../interfaces/IRouterProps';
import { Link, NavLink } from 'react-router-dom';
import { Configuration } from './../common/Configuration';

interface ILayoutState {}

class Layout extends RoutedPureComponent<ILayoutState> {
  public static displayName: string = Layout.name;

  public constructor(props: IRouterProps) {
    super(props);
    this.state = {};

    console.log(Configuration);
  }

  public render(): JSX.Element {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand -flex-center" to="/">
                <img
                  className="navbar-logo"
                  height="24"
                  src={Configuration.logo}
                  alt="React Doc Logo"
                />
                {Configuration.siteName}
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#wpfui-navbar"
                aria-controls="wpfui-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="wpfui-navbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/support">
                      Support
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/tutorial">
                      Tutorial
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/documentation">
                      Documentation
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>{this.props.children}</main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12">
                Made with:
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://reactjs.org/">
                  <code> react</code>
                </a>
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://getbootstrap.com/">
                  <code> bootstrap</code>
                </a>
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://github.com/microsoft/fluentui-system-icons">
                  <code> fluent-system-icons</code>
                </a>
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://highlightjs.org/">
                  <code> highlight.js</code>
                </a>
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://marked.js.org/">
                  <code> marked.js</code>
                </a>
              </div>
              <div className="col-12">
                Copyright &copy; 2022 lepo.co | Leszek Pomianowski
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default withRouter(Layout);
