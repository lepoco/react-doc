/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { AccessTime20Filled } from '@fluentui/react-icons';

export class Sidebar extends PureComponent {
  public static displayName: string = Sidebar.name;

  public render(): JSX.Element {
    return (
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/documentation/"
              className="nav-link text-white readme" end>
              <AccessTime20Filled className="me-2" />
              <div className="nav-title">Home</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/documentation/tutorial"
              className="nav-link text-white tutorial">
              <AccessTime20Filled className="me-2" />
              <div className="nav-title">Tutorial</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/documentation/themes/"
              className="nav-link text-white themes" end>
              <AccessTime20Filled className="me-2" />
              <div className="nav-title">Themes</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/documentation/colors/"
              className="nav-link text-white colors" end>
              <AccessTime20Filled className="me-2" />
              <div className="nav-title">Colors</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/documentation/controls/"
              className="nav-link text-white controls" end>
              <AccessTime20Filled className="me-2" />
              <div className="nav-title">Controls</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/documentation/forms/"
              className="nav-link text-white forms" end>
              <AccessTime20Filled className="me-2" />
              <div className="nav-title">Forms</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/documentation/background/"
              className="nav-link text-white background" end>
              <AccessTime20Filled className="me-2" />
              <span className="nav-title">Backgrounds</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
