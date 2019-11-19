import React from 'react';
import Memo from './components/organisms/Memo';
import Form from './components/organisms/Form';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: JSON.parse(localStorage.getItem("todo")) || [],
      priority: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
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
    let date = moment().format('YY/MM/DD hh:mm');
    if(e.target.memo.value) {
      this.state.todo.push({
        memo: e.target.memo.value,
        priority: e.target.priority.checked ? e.target.priority.value : "low",
        date: date,
      })
      this.setState({todo: this.state.todo});
      e.target.memo.value = "";
      e.target.priority.checked = false;
      this.addTodo();
    }
  }

  handlePriority(e) {
    this.setState({priority: !e.target.checked});
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
        <Form
          priority={this.state.priority}
          handleAdd={this.handleAdd}
          handlePriority={this.handlePriority}
        />
        <Memo todo={this.state.todo} handleDel={this.handleDel}/>
      </div>
    );
  }
}

export default App;
