import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
Lifting State Up

To collect data from multiple children, or to have two child components communicate with each other,
 you need to declare the shared state in their parent component instead. 
 The parent component can pass the state back down to the children by using props; 
 this keeps the child components in sync with each other and with the parent component.
*/

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           this.props.onClick();
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button
      className={`square ${props.winner ? "winner" : null}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: new Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }

  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({ squares, xIsNext: !this.state.xIsNext });
  // }

  renderSquare(i) {
    return (
      <Square
        // value={this.state.squares[i]}
        // onClick={() => this.handleClick(i)}
        value={this.props.squares[i]}
        winner={
          this.props.winner ? this.props.winner.points.includes(i) : false
        }
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // }

    const lines = [];
    for (let i = 0; i < 3; i++) {
      const line = [];
      for (let j = 0; j < 3; j++) {
        line.push(this.renderSquare(3 * i + j));
      }
      lines.push(<div className="board-row">{line}</div>);
    }

    return (
      <div>
        {/* <div className="status">{status}</div> */}

        {/* <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
        {lines}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{ squares: new Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0,
      points: [],
      ascending: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const points = this.state.points.slice(0, this.state.stepNumber + 1);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    points.push(i);

    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      points,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step & 1) === 0,
    });
  }

  render() {
    const history = this.state.history;
    // const current = history[history.length - 1];
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner.winner;
    } else {
      if (this.state.stepNumber === 9) status = "Draw!";
      else status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    const moves = history.map((step, move) => {
      const i = this.state.points[move - 1];

      const desc = move
        ? "Go to move #" + move + "(" + Math.floor(i / 3) + "," + (i % 3) + ")"
        : "Go to game start";
      return (
        <li key={move}>
          <button
            className={move === this.state.stepNumber ? "bold" : null}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    if (!this.state.ascending) moves.reverse();

    return (
      <div className="game">
        <Toggle />
        <div className="game-board">
          <Board
            winner={winner}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button
            class="sort"
            onClick={() => {
              this.setState({ ascending: !this.state.ascending });
            }}
          >
            {this.state.ascending ? "Descending" : "Ascending"}
          </button>
          <ol reversed={!this.state.ascending}>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], points: [a, b, c] };
    }
  }
  return null;
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    // console.log(this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
