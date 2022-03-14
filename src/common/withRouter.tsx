/**
 * This Source Code Form is subject to the terms of the MIT License.
 * If a copy of the MIT was not distributed with this file, You can obtain one at https://opensource.org/licenses/MIT.
 * Copyright (C) Leszek Pomianowski and react-docs Contributors.
 * All Rights Reserved.
 */

import {
  useLocation,
  useNavigate,
  useParams,
  Location,
  NavigateFunction,
  Params,
} from 'react-router-dom';

/**
 * Ugly static way to make React component classes variable from a router.
 * @param Component Instance of React component.
 * @returns JSX.Element with DOM Router parameters applied.
 */
export default function withRouter(
  ReactComponent: any,
): (props: any) => JSX.Element {
  function AddComponentProps(props: any): JSX.Element {
    const DOM_ROUTER_LOCATION: Location = useLocation();
    const DOM_ROUTER_NAVIGATE: NavigateFunction = useNavigate();
    const DOM_ROUTER_PARAMS: Readonly<Params<any>> = useParams();

    return (
      <ReactComponent
        {...props}
        router={{
          location: DOM_ROUTER_LOCATION,
          navigate: DOM_ROUTER_NAVIGATE,
          params: DOM_ROUTER_PARAMS,
        }}
      />
    );
  }

  return AddComponentProps;
}
