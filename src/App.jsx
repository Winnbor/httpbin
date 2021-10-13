import { Switch, Route } from 'react-router-dom';

import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

import HomeView from 'views/HomeView';
import DeleteView from 'views/DeleteView';
import GetView from 'views/GetView';
import PatchView from 'views/PatchView';
import PostView from 'views/PostView';
import PutView from 'views/PutView';
import NotFoundView from 'views/NotFoundView';

function App() {
  return (
    <Container>
      <Header />
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
    </Container>
  );
}

export default App;
