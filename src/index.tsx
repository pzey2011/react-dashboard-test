import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Assets/Styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './Assets/Styles/index.css';
import App from './Views/App';
import BookMain from './Views/Book/BookMain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/book">
                  <BookMain lang='fa' />
              </Route>
              <Route path="/">
                  <App lang='fa' />
              </Route>
          </Switch>

      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();