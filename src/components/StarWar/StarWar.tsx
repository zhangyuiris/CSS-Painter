import React from 'react';
import './StarWar.scss';

class StarWar extends React.Component {

  render() {
    return (
      <div>
        <div className="star-artboard">
          <div className="star-bb8">
            {/*身体*/}
            <div className="star-bb8-body">
              {/*身体里面2点3短线*/}
              <div className="star-dot star-dot-1">
                <div className="star-line star-line-1"></div>
                <div className="star-line star-line-2"></div>
                <div className="star-line star-line-3"></div>
              </div>
              <div className="star-dot star-dot-2"></div>
              {/*身体里面的三个黄色圆*/}
              <div className="star-circle star-circle-1"></div>
              <div className="star-circle star-circle-2"></div>
              <div className="star-circle star-circle-3"></div>
            </div>
            {/*身体里的阴影*/}
            <div className="star-body-shadow-crop">
              <div className="star-body-shadow"></div>
            </div>
            {/*头*/}
            <div className="star-bb8-head">
              {/*头的下面的底线*/}
              <div className="star-head-bottom">
                <div className="star-head-side-1"></div>
                <div className="star-head-side-2"></div>
                <div className="star-head-bottom-base"></div>
              </div>
              {/*半圆头*/}
              <div className="star-head-top-crop">
                <div className="star-head-top"></div>
              </div>
              {/*头里面的深色圆*/}
              <div className="star-lens"></div>
              {/*头里面的点*/}
              <div className="star-freckle"></div>
            </div>
            {/*线*/}
            <div className="star-speedlines">
              <div className="star-one star-tail"></div>
              <div className="star-two star-tail"></div>
              <div className="star-three"></div>
              <div className="star-four"></div>
              <div className="star-five star-tail"></div>
            </div>
            {/*星星*/}
            <div className="star-sparkles">
              <div className="star-one star-small star-pulse-1"></div>
              <div className="star-two star-blue star-small star-pulse-2"></div>
              <div className="star-three star-blue star-med star-pulse-3"></div>
              <div className="star-four star-orange star-pulse-2"></div>
              <div className="star-five star-orange star-pulse-1"></div>
              <div className="star-six star-blue star-small star-pulse"></div>
              <div className="star-seven star-blue star-small star-pulse"></div>
              <div className="star-eight star-small star-pulse-3"></div>
              <div className="star-nine star-pulse"></div>
              <div className="star-ten star-orange star-small-1 star-pulse"></div>
              <div className="star-eleven star-small star-pulse"></div>
              <div className="star-twelve star-small star-pulse-2"></div>
              <div className="star-thirteen star-orange star-small star-pulse"></div>
              <div className="star-fourteen star-orange star-med star-pulse-3"></div>
              <div className="star-fifteen star-small star-pulse-1"></div>
              <div className="star-sixteen star-small star-pulse"></div>
            </div>
            {/*地面*/}
            <div className="star-ground">
              <div className="star-one">
                <div className="star-bump star-move-1"></div>
              </div>
              <div className="star-two"></div>
              <div className="star-three">
                <div className="star-bump star-move-2"></div>
              </div>
              <div className="star-four">
                <div className="star-bump"></div>
              </div>
              <div className="star-five"></div>
              <div className="star-six">
                <div className="star-bump star-move-2"></div>
              </div>
              <div className="star-seven">
                <div className="star-bump"></div>
              </div>
              <div className="star-eight">
                <div className="star-bump star-move-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StarWar;
