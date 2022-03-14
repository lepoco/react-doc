/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Config } from './../Config';

export class Sidebar extends PureComponent {
  public static displayName: string = Sidebar.name;

  public render(): JSX.Element {
    return (
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white">
        <ul className="nav nav-pills flex-column mb-auto">
          {Config.sidebar.map(function (element, index) {
            return (
              <li className="nav-item">
                <NavLink
                  to={element.path}
                  className="nav-link text-white readme"
                  end>
                  <element.icon className='me-2' />
                  <div className="nav-title">{element.name}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
