/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { Route, Routes } from 'react-router-dom';
import RoutedComponent from './common/RoutedComponent';
import withRouter from './common/withRouter';

import Layout from './components/Layout';
import { Home } from './components/Home';
import { Support } from './components/Support';
import Documentation from './components/Documentation';
import { NotFound } from './components/NotFound';

class App extends RoutedComponent {
  public static displayName: string = App.name;

  public render(): JSX.Element {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:pageId" element={<Documentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }
}

export default withRouter(App);
