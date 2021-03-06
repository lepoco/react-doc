/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Home extends PureComponent {
  public static displayName: string = Home.name;

  public render(): JSX.Element {
    return (
      <>
        <div className="container">
          <p>Home</p>
        </div>
      </>
    );
  }
}
