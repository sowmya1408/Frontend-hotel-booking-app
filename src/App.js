import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePageCont from './containers/HomePageCont';
import BookPage from './containers/BookPage';

function App() {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomePageCont} />
          <Route exact path="/book" component={BookPage} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;
