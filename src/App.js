import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Welcome from './Component/Result';
import Home from './Component/Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />

        <Route exact path="/Login" component={Login} />

        <Route exact path="/Welcome" component={Welcome} />
      </Switch>
      {/* </BrowserRouter> */}
      <Footer />
    </>
  );
}
export default App;
