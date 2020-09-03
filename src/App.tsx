import React from 'react';
import './assets/style/style.css'
import Navigation from './components/navigation';
import Landing from './pages/landing/landing';

function App() {
  return (
    <div className="App">
      <Navigation
        menu={[
          {"title": "HOW WE WORK", "link": "#"},
          {"title": "BLOG", "link": "#"},
          {"title": "ACCOUNT", "link": "#"}
        ]}
        titleButton="VIEW PLANS"
      />
      <Landing />
    </div>
  );
}

export default App;
