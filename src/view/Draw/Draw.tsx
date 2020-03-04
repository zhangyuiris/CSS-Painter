import React from 'react';
import StarWar from '../../components/StarWar/StarWar';
import More from '../../components/More/More';
import './Draw.scss';

class Draw extends React.Component {
  render() {
    return (
      <div className={'draw-wrapper'}>
        <StarWar/>
        <More/>
      </div>
    );
  }
}

export default Draw;
