import React from 'react';
import Memo from './components/Memo';
import Form from './components/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    this.state.todo.push({memo: e.target.memo.value})
    this.setState({todo: this.state.todo});
    e.target.memo.value = "";
  }

  render() {
    return (
      <div>
        <Form handleAdd={this.handleAdd}/>
        <Memo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
