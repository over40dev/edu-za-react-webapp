import React from 'react';

class App extends React.Component {

  state = {
    actionCount: 0,
    incrementCount: this.props.incrementCount || 1, // set to prop passed in or 1 if no number passed in
  };

  handleAction = () => {
    // 1. State should not be mutated directly, so take copy of existing state
    let actionCount = this.state.actionCount;
    // 2. Modify the copy of state
    actionCount = actionCount + this.state.incrementCount;
    // 3. display the current count by modifying state using React's State API
    this.setState({actionCount});
  };

  render() {
    return (
      <div>
        <h2>Clicked: {this.state.actionCount} times!!!</h2>
        <Counter onAction={this.handleAction} />
      </div>
    );
  }

}

const Counter = ({onAction}) => (
    <button onClick={onAction}>Click Me!</button>
);


export default App;
