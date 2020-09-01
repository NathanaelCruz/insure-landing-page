import React from 'react';
import './assets/style/style.css'
import Navigation from './components/navigation';

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
    </div>
  );
}

export default App;
