import React from 'react';
import Logo from './components/Logo/Logo';
import Draw from './view/Draw/Draw';
import './App.scss'

function App() {
  return (
    <div className={'container'}>
      <div className={'sidebar'}>
        <div className={'logo-container'}>
          <Logo />
        </div>
        <div className={'title'}>CSS painter</div>
        <div className={'content'}>draw with CSS</div>
      </div>
      <div className={'draw'}>
        <Draw/>
      </div>
    </div>
  );
}

export default App;
