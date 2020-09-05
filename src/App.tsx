import React from 'react';
import './assets/style/style.css'
import Navigation from './components/navigation';
import Landing from './pages/landing/landing';
import Footer from './components/footer';

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
      <Footer menu={[
        {item: 
          {text: 'OUR COMPANY', submenu: [
            {"itemSubmenu": {textSub: 'HOW WE WORK', linkText: '/'}},
            {"itemSubmenu": {textSub: 'WHY INSURE?', linkText: '/'}},
            {"itemSubmenu": {textSub: 'CHECK PRICE', linkText: '/'}},
            {"itemSubmenu": {textSub: 'REVIEWS', linkText: '/'}}
          ]}
        },
        {item: 
          {text: 'HELP ME', submenu: [
            {"itemSubmenu": {textSub: 'HOW WE WORK', linkText: '/'}},
            {"itemSubmenu": {textSub: 'WHY INSURE?', linkText: '/'}},
            {"itemSubmenu": {textSub: 'CHECK PRICE', linkText: '/'}},
            {"itemSubmenu": {textSub: 'REVIEWS', linkText: '/'}}
          ]}
        },
        {item: 
          {text: 'CONTACT', submenu: [
            {"itemSubmenu": {textSub: 'HOW WE WORK', linkText: '/'}},
            {"itemSubmenu": {textSub: 'WHY INSURE?', linkText: '/'}},
            {"itemSubmenu": {textSub: 'CHECK PRICE', linkText: '/'}},
            {"itemSubmenu": {textSub: 'REVIEWS', linkText: '/'}}
          ]}
        },
        {item: 
          {text: 'OTHERS', submenu: [
            {"itemSubmenu": {textSub: 'CARRERS', linkText: '/'}},
            {"itemSubmenu": {textSub: 'PRESS', linkText: '/'}},
            {"itemSubmenu": {textSub: 'LICENSES', linkText: '/'}}
          ]}
        }
      ]} />
    </div>
  );
}

export default App;
