import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/' component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
