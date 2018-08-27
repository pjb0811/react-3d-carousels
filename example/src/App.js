import React, { Component } from 'react';

import Carousel from 'react-3d-carousels';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>react-3d-carousels</h1>
        <div
          style={{
            width: 300,
            height: 300,
            margin: '0 auto'
          }}
        >
          <Carousel
            ref={carousel => (this.carousel = carousel)}
            width={300}
            height={300}
            direction={'horizontal'}
            effect={'3d'}
            index={0}
          >
            <div style={{ background: 'green', width: 300, height: 300 }}>
              1
            </div>
            <div style={{ background: 'red', width: 300, height: 300 }}>2</div>
            <div style={{ background: 'blue', width: 300, height: 300 }}>3</div>
            <div style={{ background: 'yellow', width: 300, height: 300 }}>
              4
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
