import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';
import appState from './state.js';
import { Stage, Header, Footer } from './components/layout';

const DeviceChain = styled.div`
  flex: 1;
  display: flex;
`
DeviceChain.displayName = 'DeviceChain';

const ActiveDevice = styled.div`
  background: orange;
  height: 100px;
`
const Device = styled.div`
  width: 100px;
  height: 100px;
  border: ${props => props.active ? '3px solid black' : '1px solid black'};
  text-align: center;
  flex-direction: row;
  flex: 1 1 auto;
  margin: 20px;
`

Device.displayName = 'Device';

const Cabinet = styled(Device)`
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

@inject("store")
@observer class Counter extends Component {
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
          <Header>Header</Header>
          <DeviceChain>
            <NoiseGate>Noise Gate</NoiseGate>
            <Cabinet>Cabinet</Cabinet>
            <Filter>Filter</Filter>
            <Stomp>Stomp</Stomp>
            <Delay>Delay</Delay>
            <Modulation>Modulation</Modulation>
            <Reverb>Reverb</Reverb>
          </DeviceChain>
          <ActiveDevice>Active Device Here</ActiveDevice>
          <DevTools />
          <Footer>Footer</Footer>
        </Stage>
      </Provider>
    );
  }
}

export default App;
