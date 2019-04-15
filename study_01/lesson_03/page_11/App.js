import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ken the Ninja' };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <button
          onClick={() => {
            this.setState({ name: 'Master White' });
          }}
        >
          Master White
        </button>
        <button
          onClick={() => {
            this.setState({ name: 'Ken the Ninja' });
          }}
        >
          Ken the Ninja
        </button>
      </div>
    );
  }
}

export default App;
