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
import { Config } from './../Config';

interface ILayoutState {
  isNavbarCollapsed: boolean;
}

class Layout extends RoutedPureComponent<ILayoutState> {
  public static displayName: string = Layout.name;

  public constructor(props: IRouterProps) {
    super(props);
    this.state = {
      isNavbarCollapsed: true,
    };

    this.onNavClick = this.onNavClick.bind(this);
  }

  private onNavClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    this.setState({ isNavbarCollapsed: !this.state.isNavbarCollapsed });
  }

  public render(): JSX.Element {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <Link className="navbar-brand -flex-center" to="/">
                <img
                  className="navbar-logo"
                  height="24"
                  src={Config.logo}
                  alt="React Doc Logo"
                />
                {Config.siteName}
              </Link>
              <button
                onClick={e => this.onNavClick(e)}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bootstrap-navbar"
                aria-controls="bootstrap-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`${
                  this.state.isNavbarCollapsed ? 'collapse' : ''
                } navbar-collapse`}
                id="bootstrap-navbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <ul className="navbar-nav ml-auto">
                  {Config.menu.map(function (element, index) {
                    return (
                      <li key={index} className="nav-item">
                        <NavLink
                          className="nav-link"
                          aria-current="page"
                          to={element.path} end>
                          {element.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>{this.props.children}</main>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12"></div>
              <div className="col-12">
                Build with
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://github.com/lepoco/react-doc">
                  <code> react-doc </code>
                </a>
                based on:
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://reactjs.org/">
                  <code> react</code>
                </a>
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://react-highlight.neostack.com/">
                  <code> react-highlight</code>
                </a>
                <a
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  href="https://marked.js.org/">
                  <code> marked.js</code>
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
