/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AccessTime20Filled } from '@fluentui/react-icons';

export class Support extends PureComponent {
  public static displayName: string = Support.name;

  public render(): JSX.Element {
    return (
      <>
        <p>
          <AccessTime20Filled aria-label="AccessTime20Filled" />
          Support
        </p>
      </>
    );
  }
}
