import React from 'react';
import Memo from './components/Memo';
import Form from './components/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: JSON.parse(localStorage.getItem("todo")) || []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  // todoList itemの追加
  addTodo = () => {
    // localStorageにtodoList stateを保存
    localStorage.setItem("todo", JSON.stringify(this.state.todo))
  }

  // todoListからitemを削除
  removeTodo = (memo) => {
    localStorage.setItem("todo", JSON.stringify(this.state.todo.filter(x => x !== memo)));
  }

  handleAdd(e) {
    e.preventDefault();
    if(e.target.memo.value) {
      this.state.todo.push({
        memo: e.target.memo.value,
        priority: e.target.priority.checked ? e.target.priority.value : "low"},
        // date: new Date().toString
      )
      this.setState({todo: this.state.todo});
      e.target.memo.value = "";
      e.target.priority.checked = false;
      this.addTodo();
    }
  }

  handleDel(memo) {
    this.setState({
      todo: this.state.todo.filter(x => x !== memo)
    })
    this.removeTodo(memo);
  }

  render() {
    return (
      <div>
        <Form handleAdd={this.handleAdd}/>
        <Memo todo={this.state.todo} handleDel={this.handleDel}/>
      </div>
    );
  }
}

export default App;
