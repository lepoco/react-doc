/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import IRouterProps from './../interfaces/IRouterProps';
import IRouter from './../interfaces/IRouter';

/**
 * Contains the logic for a component that is part of the DOM router.
 */
export default class RoutedComponent<S = {}> extends PureComponent<
  IRouterProps,
  S
> {
  public router: IRouter;

  public constructor(props: IRouterProps) {
    super(props);

    this.router = props.router;
  }

  public shouldComponentUpdate(
    nextProps: Readonly<IRouterProps>,
    nextState: Readonly<any>,
    nextContext: any,
  ): boolean {
    if (nextProps.router !== undefined) {
      this.router = nextProps.router;
    }

    return true;
  }
}
