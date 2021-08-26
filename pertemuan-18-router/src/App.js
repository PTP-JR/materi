import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Login  from './components/Login';
import Home from "./components/Home"
import About from './components/About';
import { useState } from 'react';
import Blog from './components/Blog';
import ListBlog from './components/ListBlog';

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {/* 3. Buat navigasi */}
      <Link to="/">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/blog">Blog</Link><br />
      <Link to="/login">Login</Link>

      {/* 2. Buat rute dengan Switch */}
      <Switch>
        <Route exact path="/">
          {login ? <Home /> : <Redirect to="/login"/> }
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <ListBlog />
        </Route>
        <Route path="/blog/:title">
          <Blog />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
