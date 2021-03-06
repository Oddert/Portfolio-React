import React from 'react';
import './App.scss';

import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'
import Portfolio from './Portfolio'
import Profile from './Profile'
import Social from './Social'
import StaticTop from './StaticTop'

function App() {
  return (
    <div className="App">
      <Nav />
      <StaticTop />
      <Portfolio />
      <Profile />
      <Social />
      <Contact />
      <Footer />
      {/* <div style={{ height: '1000px' }}></div> */}
    </div>
  );
}

export default App;
