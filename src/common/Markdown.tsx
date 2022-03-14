/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { marked } from 'marked';
import Highlight from 'react-highlight';
import { Config } from './../Config';

export default class Markdown {
  public static async fetchAndParse(
    markdownPath: string,
  ): Promise<JSX.Element> {
    markdownPath = Config.markdowns + markdownPath + '.md';

    let response = await fetch(markdownPath, {
      method: 'GET',
    });

    return Markdown.parse(await response.text());
  }

  public static staticFetchAndParse(
    markdownPath: string,
    callback: (n: JSX.Element) => void,
  ): void {
    markdownPath = Config.markdowns + markdownPath + '.md';

    fetch(markdownPath)
      .then(response => response.text())
      .then(data => {
        if (callback !== null) {
          callback(Markdown.parse(data));
        }
      });
  }

  public static parse(rawText: string): JSX.Element {
    const parsedHtml = marked.parse(rawText);

    return (
      <Highlight className="markdown" innerHTML={true}>
        {parsedHtml}
      </Highlight>
    );
  }
}
