import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view" */),
);
const DeleteView = lazy(() =>
  import('views/DeleteView' /* webpackChunkName: "delete-view" */),
);
const GetView = lazy(() =>
  import('views/GetView' /* webpackChunkName: "get-view" */),
);
const PatchView = lazy(() =>
  import('views/PatchView' /* webpackChunkName: "patch-view" */),
);
const PostView = lazy(() =>
  import('views/PostView' /* webpackChunkName: "post-view" */),
);
const PutView = lazy(() =>
  import('views/PutView' /* webpackChunkName: "put-view" */),
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/delete">
            <DeleteView />
          </Route>
          <Route path="/get">
            <GetView />
          </Route>
          <Route path="/patch">
            <PatchView />
          </Route>
          <Route path="/post">
            <PostView />
          </Route>
          <Route path="/put">
            <PutView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
