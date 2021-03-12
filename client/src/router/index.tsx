import { FC } from 'react';

import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import { Home } from '../routes';

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
