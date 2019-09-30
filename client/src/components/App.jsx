import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentBoard: []
    // };
    // this.getNewBoard = this.getNewBoard.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <hr />
        <div>
          {/* <Board boardMap={this.state.currentBoard} /> */}
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
