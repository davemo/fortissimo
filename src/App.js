import React, { Component } from 'react';
import styled from 'styled-components';

const Stage = styled.div`
  background: brown;
`

const Timeline = styled.div`
  background: yellow;
`

const ActiveNode = styled.div`
  background: orange;
  height: 100px;
`

class App extends Component {
  render() {
    return (
      <Stage>
        Stage
        <Timeline>Timeline</Timeline>
        <ActiveNode>Active Node Here</ActiveNode>
      </Stage>
    );
  }
}

export default App;
