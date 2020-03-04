import React from 'react';
import './Logo.scss'


class Logo extends React.Component {

  render() {
    return (
      <div className={'logo-smile-wrapper'}>
        <div className={'logo-face'}>
          <div className={'logo-glass'}>
            <div className={'logo-line'}></div>
            <div className={'logo-dot logo-dot-1'}></div>
            <div className={'logo-dot logo-dot-2'}></div>
          </div>
          <div className={'logo-mouth'}>
            <div className={'logo-line logo-line-1'}></div>
            <div className={'logo-line logo-line-2'}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
