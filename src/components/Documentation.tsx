/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import RoutedPureComponent from './../common/RoutedPureComponent';
import withRouter from './../common/withRouter';
import IRouterProps from './../interfaces/IRouterProps';
import Markdown from './../common/Markdown';
import { Configuration } from './../common/Configuration';
import { Link } from 'react-router-dom';

interface IDocumentationState {
  pageId?: string;
  markdownContent: JSX.Element;
}

class Documentation extends RoutedPureComponent<IDocumentationState> {
  public static displayName: string = Documentation.name;

  public constructor(props: IRouterProps) {
    super(props);

    this.state = {
      pageId: this.router.params.pageId ?? '',
      markdownContent: <></>,
    };
  }

  public componentDidMount(): void {
    let markdownPath = '';

    if (this.state.pageId !== '' && this.state.pageId !== undefined) {
      markdownPath = this.state.pageId.toUpperCase();
    } else {
      markdownPath = 'README';
    }

    markdownPath = Configuration.markdowns + markdownPath + '.md';

    this.fetchAndPrintMarkdown(markdownPath);
  }

  private fetchAndPrintMarkdown(url: string): void {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        this.setState({ markdownContent: Markdown.parse(data) });
      });
  }

  public render(): JSX.Element {
    return <>{this.state.markdownContent}</>;
  }
}

export default withRouter(Documentation);
