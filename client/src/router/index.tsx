import { FC } from 'react';

import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import { Layout } from 'components/Layout';
import { Home, Subscribers } from '../routes';

export const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subscribers" component={Subscribers} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
