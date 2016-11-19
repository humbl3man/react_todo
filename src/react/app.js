import React, {Component} from 'react';
import $ from 'jquery';


const path = require('path');


class TodoAdd extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <form className="form-inline" noValidate>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="add task"/>
            </div>
            <div className="form-group">
              <button className="btn btn-default" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class TodoItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table className="table table-bordered" style={{marginTop: '40px'}}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <div className="checkbox" style={{margin: 0}}>
                    <label><input className="control-label" type="checkbox"/>Complete</label>                
                  </div>
                </td>
              </tr>
            );
          })}          
        </tbody>

      </table>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-center">{this.props.name}</h1>
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.todoList = [];
  }

  componentDidMount() {
    $.get('/mock/todo.json', (response) => {
      this.setState({
        todoList: response.data
      });
    });
  }

  render() {
    return (
      <div id="searchApp">
        <Header name="..."/>
        <div className="container">
          <TodoAdd />
          <TodoItems items={this.state.todoList}/>
        </div>
      </div>
    );
  }
}
