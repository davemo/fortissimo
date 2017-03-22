import React, { Component } from 'react';
import styled from 'styled-components';

const Stage = styled.div`
  background: brown;
`

const DeviceChain = styled.div`
  background: yellow;
  height: 40px;
`

const ActiveDevice = styled.div`
  background: orange;
  height: 100px;
`

const Device = styled.div`
  display: inline-block;
  margin: 0 20px;
  width: 100px;
  height: 100px;
  border: ${props => props.active ? '3px solid black' : '1px solid black'};
  text-align: center;
`

const Cabinet = styled(Device)`
  width: 200px;
  height: 150px;
  background: yellow;
`

const NoiseGate = styled(Device)`
  background: brown;
`
const Filter = styled(Device)`
  background: white;
`
const Stomp = styled(Device)`
  background: green;
`
const Delay = styled(Device)`
  background: black;
`
const Modulation = styled(Device)`
  background: orange;
`
const Reverb = styled(Device)`
  background: purple;
`

class App extends Component {
  render() {
    return (
      <Stage>
        Stage
        <DeviceChain>
          <NoiseGate>Noise Gate</NoiseGate>
          <Cabinet active>Cabinet</Cabinet>
          <Filter>Filter</Filter>
          <Stomp>Stomp</Stomp>
          <Delay>Delay</Delay>
          <Modulation>Modulation</Modulation>
          <Reverb>Reverb</Reverb>
        </DeviceChain>
        <ActiveDevice>Active Device Here</ActiveDevice>
      </Stage>
    );
  }
}

export default App;
