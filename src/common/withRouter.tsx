/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import { useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * Ugly static way to make React component classes variable from a router.
 * @param Component Instance of React component.
 * @returns JSX.Element with DOM Router parameters applied.
 */
export default function withRouter(Component: any) {
  return props => (
    <Component
      {...props}
      router={{
        location: useLocation(),
        navigate: useNavigate(),
        params: useParams(),
      }}
    />
  );
}
