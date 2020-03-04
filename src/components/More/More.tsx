import React from 'react';
import './More.scss'

class More extends React.Component {

  render() {
    return (
      <div className="more-wrapper">
        <div className="more-load-wrapper">
          <div className="more-bar"></div>
        </div>
        <div className="more-load-wrapper">
          <div className="more-load-circle1">
          </div>
        </div>
      </div>
    );
  }
}

export default More;
