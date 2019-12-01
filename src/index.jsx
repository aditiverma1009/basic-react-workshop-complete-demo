import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './Components/App/App';
import ContactPage from './Components/ContactPage/ContactPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

import './index.scss';

const routing = (
  <BrowserRouter>
    <div className="body-background">
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById('root'));
