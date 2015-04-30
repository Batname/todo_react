import Footer from './Footer.jsx';
import Header from './Header.jsx';
import MainSection from './MainSection.jsx';
import React from 'react';
import TodoStore from '../stores/todo_store';


function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

let TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },


  render: function() {
  	return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

export default TodoApp;
