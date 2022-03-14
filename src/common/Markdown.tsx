/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { marked } from 'marked';
import Highlight from 'react-highlight';

export default class Markdown {
  public static async fetchAndParse(url: string): Promise<JSX.Element> {
    return <></>;
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
