/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import {
  IConfiguration,
  IMenuElement,
  ISidebarElement,
} from './interfaces/IConfiguration';
import {
  FluentIconsProps,
  Home20Regular,
  PuzzlePiece20Regular,
  PaintBrush20Regular,
  PaintBucket20Regular,
  CheckboxIndeterminate20Regular,
  WindowApps20Regular,
  ColorBackground20Regular,
} from '@fluentui/react-icons';

export class ME implements IMenuElement {
  public name: string;
  public path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}

export class SE implements ISidebarElement {
  public name: string;
  public path: string;
  public icon: React.FC<FluentIconsProps>;

  constructor(name: string, path: string, icon: React.FC<FluentIconsProps>) {
    this.name = name;
    this.path = path;
    this.icon = icon;
  }
}

export class Config implements IConfiguration {
  public static siteName: string = 'React DOC';
  public static logo: string = 'img/react-doc.png';
  public static markdowns: string =
    'https://raw.githubusercontent.com/lepoco/wpfui/gh-pages/';
  public static menu: IMenuElement[] = [
    new ME('Home', '/'),
    new ME('Support', 'support'),
    new ME('Tutorial', 'documentation/tutorial'),
    new ME('Documentation', 'documentation/'),
  ];
  public static sidebar: ISidebarElement[] = [
    new SE('Introduction', '/documentation/', Home20Regular),
    //new SE('Tutorial', '/documentation/tutorial', PuzzlePiece20Regular),
    new SE('Themes', '/documentation/themes', ColorBackground20Regular),
    new SE('Colors', '/documentation/colors', PaintBrush20Regular),
    new SE('Controls', '/documentation/controls', WindowApps20Regular),
    new SE('Forms', '/documentation/forms', CheckboxIndeterminate20Regular),
    new SE('Backgrounds', '/documentation/background', PaintBucket20Regular),
  ];
}
