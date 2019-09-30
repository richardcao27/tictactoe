import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 'X',
      totalMoves: 0
    };
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.click4 = this.click4.bind(this);
    this.click5 = this.click5.bind(this);
    this.click6 = this.click6.bind(this);
    this.click7 = this.click7.bind(this);
    this.click8 = this.click8.bind(this);
    this.click9 = this.click9.bind(this);
    this.reset = this.reset.bind(this);
  }

  alternate() {
    if (this.state.currentTurn === 'X') {
      this.state.currentTurn = 'O';
    } else if (this.state.currentTurn === 'O') {
      this.state.currentTurn = 'X';
    }

    this.state.totalMoves++;

    this.setState({
      currentTurn: this.state.currentTurn,
      totalMoves: this.state.totalMoves
    });
  }

  click1() {
    document.getElementById('b1').style.backgroundColor = 'red';
    if (!document.getElementById('b1').innerHTML) {
      document.getElementById('b1').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click2() {
    document.getElementById('b2').style.backgroundColor = 'yellow';
    if (!document.getElementById('b2').innerHTML) {
      document.getElementById('b2').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click3() {
    document.getElementById('b3').style.backgroundColor = 'green';
    if (!document.getElementById('b3').innerHTML) {
      document.getElementById('b3').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click4() {
    document.getElementById('b4').style.backgroundColor = 'brown';
    if (!document.getElementById('b4').innerHTML) {
      document.getElementById('b4').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click5() {
    document.getElementById('b5').style.backgroundColor = 'pink';
    if (!document.getElementById('b5').innerHTML) {
      document.getElementById('b5').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click6() {
    document.getElementById('b6').style.backgroundColor = 'blue';
    if (!document.getElementById('b6').innerHTML) {
      document.getElementById('b6').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click7() {
    document.getElementById('b7').style.backgroundColor = 'purple';
    if (!document.getElementById('b7').innerHTML) {
      document.getElementById('b7').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click8() {
    document.getElementById('b8').style.backgroundColor = 'orange';
    if (!document.getElementById('b8').innerHTML) {
      document.getElementById('b8').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }
  click9() {
    document.getElementById('b9').style.backgroundColor = 'gray';
    if (!document.getElementById('b9').innerHTML) {
      document.getElementById('b9').innerHTML = this.state.currentTurn;
      this.alternate();
    }
    this.checkWin();
    console.log('Counter: ', this.state.totalMoves);
  }

  reset() {
    document.getElementById('b1').style.backgroundColor = 'white';
    document.getElementById('b1').innerHTML = '';
    document.getElementById('b2').style.backgroundColor = 'white';
    document.getElementById('b2').innerHTML = '';
    document.getElementById('b3').style.backgroundColor = 'white';
    document.getElementById('b3').innerHTML = '';
    document.getElementById('b4').style.backgroundColor = 'white';
    document.getElementById('b4').innerHTML = '';
    document.getElementById('b5').style.backgroundColor = 'white';
    document.getElementById('b5').innerHTML = '';
    document.getElementById('b6').style.backgroundColor = 'white';
    document.getElementById('b6').innerHTML = '';
    document.getElementById('b7').style.backgroundColor = 'white';
    document.getElementById('b7').innerHTML = '';
    document.getElementById('b8').style.backgroundColor = 'white';
    document.getElementById('b8').innerHTML = '';
    document.getElementById('b9').style.backgroundColor = 'white';
    document.getElementById('b9').innerHTML = '';
    document.getElementById('changeText').innerText = 'Another round!';
    this.setState({
      currentTurn: 'X',
      totalMoves: 0
    });
  }

  checkWin() {
    if (this.state.totalMoves >= 5) {
      this.checkRows();
      this.checkCols();
      this.checkDiags();
    }
    if (this.state.totalMoves === 9) {
      document.getElementById('changeText').innerText = 'Tie!';
    }
  }

  checkRows() {
    if (
      document.getElementById('b1').innerHTML ===
        document.getElementById('b2').innerHTML &&
      document.getElementById('b2').innerHTML ===
        document.getElementById('b3').innerHTML &&
      document.getElementById('b3').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
    if (
      document.getElementById('b4').innerHTML ===
        document.getElementById('b5').innerHTML &&
      document.getElementById('b5').innerHTML ===
        document.getElementById('b6').innerHTML &&
      document.getElementById('b6').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
    if (
      document.getElementById('b7').innerHTML ===
        document.getElementById('b8').innerHTML &&
      document.getElementById('b8').innerHTML ===
        document.getElementById('b9').innerHTML &&
      document.getElementById('b9').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
  }

  checkCols() {
    if (
      document.getElementById('b1').innerHTML ===
        document.getElementById('b4').innerHTML &&
      document.getElementById('b4').innerHTML ===
        document.getElementById('b7').innerHTML &&
      document.getElementById('b7').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
    if (
      document.getElementById('b2').innerHTML ===
        document.getElementById('b5').innerHTML &&
      document.getElementById('b5').innerHTML ===
        document.getElementById('b8').innerHTML &&
      document.getElementById('b8').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
    if (
      document.getElementById('b3').innerHTML ===
        document.getElementById('b6').innerHTML &&
      document.getElementById('b6').innerHTML ===
        document.getElementById('b9').innerHTML &&
      document.getElementById('b9').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
  }

  checkDiags() {
    if (
      document.getElementById('b1').innerHTML ===
        document.getElementById('b5').innerHTML &&
      document.getElementById('b5').innerHTML ===
        document.getElementById('b9').innerHTML &&
      document.getElementById('b9').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
    if (
      document.getElementById('b3').innerHTML ===
        document.getElementById('b5').innerHTML &&
      document.getElementById('b5').innerHTML ===
        document.getElementById('b7').innerHTML &&
      document.getElementById('b7').innerHTML !== ''
    ) {
      document.getElementById('changeText').innerText = 'Win!';
    }
  }

  render() {
    return (
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td className="td" id="b1" onClick={this.click1}></td>
              <td className="td" id="b2" onClick={this.click2}></td>
              <td className="td" id="b3" onClick={this.click3}></td>
            </tr>
            <tr>
              <td className="td" id="b4" onClick={this.click4}></td>
              <td className="td" id="b5" onClick={this.click5}></td>
              <td className="td" id="b6" onClick={this.click6}></td>
            </tr>
            <tr>
              <td className="td" id="b7" onClick={this.click7}></td>
              <td className="td" id="b8" onClick={this.click8}></td>
              <td className="td" id="b9" onClick={this.click9}></td>
            </tr>
          </tbody>
        </table>
        <p id="changeText">LETS GOOOOOO</p>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default Board;
