import React from 'react';
import './App.css';
import Home from './views/home';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './views/contact';
import injectContext from './store/appContext';

const App = props => {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex" id="wrapper">
          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- /#sidebar-wrapper --> */}
          {/* <!-- Page Content --> */}
          <div id="page-content-wrapper">
            <Navbar />
            <Switch>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
          {/* <!-- /#page-content-wrapper --> */}
        </div>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
