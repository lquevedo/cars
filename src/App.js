import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/universal/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Error from './components/Error';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/' component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
