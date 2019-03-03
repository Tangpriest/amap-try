


import React from 'react'

import { Map,Marker } from 'react-amap';
export default class App extends React.Component {
  constructor() {
    super()
    this.markerPosition = {longitude: 121, latitude: 36}
    this.toggleCtrlBar = this.toggleCtrlBar.bind(this);
    this.state = {
      plugins: ['ControlBar']
    }
  }

  toggleCtrlBar() {
    if (this.state.plugins.indexOf('ControlBar') === -1) {
      this.setState({
        plugins: ['ControlBar']
      });
    } else {
      this.setState({
        plugins: []
      });
    }
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        <Map

          resizeEnable={true}
          rotateEnable={true}
          zoom={17}
          pitch={64}
          rotation={45}
          viewMode="3D"
          expandZoomRange={true}
          zooms={[3, 20]}
          //mapStyle={'dark'}
          // center={[116.333926, 39.997245]}
          plugins={this.state.plugins}
          amapkey={`1bd4c093df6ec8f3590b109c23a3610a`}
        />
        <Marker position={this.markerPosition} />
        {/* <button onClick={this.toggleCtrlBar}>Toggle Control Bar</button> */}
      </div>
    )
  }
}