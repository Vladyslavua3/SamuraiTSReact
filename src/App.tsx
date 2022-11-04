import React from 'react';
import './App.css';


const App = () => {
  return (
      <div className='app-wrapper'>
        <header className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png' alt='logo'/>
        </header >
          <nav className='nav'>
              <div>
                  Profile
              </div>
              <div>
                  Messages
              </div>
              <div>
                  Main Content
              </div>
          </nav>
          <div className='content'>Main Content</div>
      </div>
)
}

export default App;
