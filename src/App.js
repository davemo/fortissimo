import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';
import appState from './state.js';

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

const StyledCounter = styled.span`
  background: ${props => props.isOdd ? 'blue' : 'orange'};
`;

@inject("store") @observer
class Counter extends Component {
  increment = () => {
    this.props.store.count++;
  }

  decrement = () => {
    this.props.store.count--;
  }

  render() {
    return(
      <StyledCounter>
        <span>{this.props.store.count}</span>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </StyledCounter>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={appState}>
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
          <Counter />
          <DevTools />
        </Stage>
      </Provider>
    );
  }
}

export default App;
