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
import { Sidebar } from './Sidebar';

interface IDocumentationState {
  pageId?: string;
  markdownContent: JSX.Element;
}

class Documentation extends RoutedPureComponent<IDocumentationState> {
  public static displayName: string = Documentation.name;

  public constructor(props: IRouterProps) {
    super(props);

    this.state = {
      pageId: '',
      markdownContent: <></>,
    };
  }

  public componentDidMount(): void {
    this.renderMarkup();
  }

  public getSnapshotBeforeUpdate(
    prevProps: Readonly<IRouterProps>,
    prevState: Readonly<IDocumentationState>,
  ) {
    let currentRouter = this.router.params?.pageId ?? '';

    if (this.state.pageId === currentRouter) return;

    this.renderMarkup();
  }

  private renderMarkup(): void {
    if (this.router.params.pageId === this.state.pageId) return;

    let markdownPath = '';

    if (
      this.router.params.pageId !== '' &&
      this.router.params.pageId !== undefined
    ) {
      markdownPath = this.router.params.pageId.toUpperCase();
    } else {
      markdownPath = 'README';
    }

    Markdown.staticFetchAndParse(markdownPath, e => {
      this.setState({
        markdownContent: e,
        pageId: this.router.params.pageId ?? '',
      });
    });
  }

  public render(): JSX.Element {
    return (
      <>
        <Sidebar />
        <div>{this.state.markdownContent}</div>
      </>
    );
  }
}

export default withRouter(Documentation);
