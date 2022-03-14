/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import RoutedPureComponent from './../common/RoutedPureComponent';
import withRouter from './../common/withRouter';
import IRouterProps from './../interfaces/IRouterProps';
import { Link } from 'react-router-dom';

interface IDocumentationState {
  pageId?: string;
}

class Documentation extends RoutedPureComponent<IDocumentationState> {
  public static displayName: string = Documentation.name;

  public constructor(props: IRouterProps) {
    super(props);

    this.state = {
      pageId: this.router.params.pageId ?? '',
    };

    console.log(this.state);
  }

  public render(): JSX.Element {
    return (
      <>
        <p>Documentation</p>
      </>
    );
  }
}

export default withRouter(Documentation);
