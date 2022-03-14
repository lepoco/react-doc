/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { FluentIconsProps } from '@fluentui/react-icons';

export interface IConfiguration {}

export interface ISidebarElement {
  name: string;
  path: string;
  icon: React.FC<FluentIconsProps>;
}

export interface IMenuElement {
  name: string;
  path: string;
}
