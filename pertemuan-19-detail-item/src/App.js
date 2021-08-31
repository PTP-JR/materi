import { Switch, Route, Link } from 'react-router-dom';

import Home from "./components/Home"
import About from './components/About';
import { useState } from 'react';

import ListUser from './components/ListUser';
import DetailUser from './components/DetailUser';

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {/* 3. Buat navigasi */}
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/users">Users</Link><br />

      {/* 2. Buat rute dengan Switch */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/users">
          <ListUser />
        </Route>
        <Route exact path="/users/:id">
          <DetailUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
