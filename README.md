# react-3d-carousels

> carousel app using react &amp; react-motion

[![NPM](https://img.shields.io/npm/v/react-3d-carousels.svg)](https://www.npmjs.com/package/react-3d-carousels) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package is included in [react-motion-components](https://github.com/pjb0811/react-motion-components).

## Install

```bash
npm install --save react-3d-carousels
```

## Usage

[demo](https://codesandbox.io/s/v0p43q2wy)

```tsx
import * as React from 'react'

import Carousel from 'react-3d-carousels'

class Example extends React.Component {
  render () {
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
    )
  }
}
```

## License

MIT © [pjb0811](https://github.com/pjb0811)
