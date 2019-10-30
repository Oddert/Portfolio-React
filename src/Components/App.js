import React from 'react';
import './App.scss';

import Nav from './Nav'
import Portfolio from './Portfolio'
import Profile from './Profile'
import StaticTop from './StaticTop'

function App() {
  return (
    <div className="App">
      <Nav />
      <StaticTop />
      <Portfolio />
      <Profile />
      <div style={{ height: '1000px' }}></div>
    </div>
  );
}

export default App;
