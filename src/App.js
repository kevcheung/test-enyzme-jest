import React, { Component } from 'react';
import Input from './components/Input';

class App extends Component {
  state = {
    name: ''
  }
  // handleNameChange = this.handleNameChange.bind(this);

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }
  
  render() {
    return (
      <div className="App">
        <Input 
          name="name"
          type="text"
          onChange={this.handleNameChange}
          placeholder="Name..."
          value={this.state.name}
        />
      </div>
    );
  }
}

export default App;
