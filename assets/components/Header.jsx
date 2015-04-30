import React from 'react';
import TodoActions from '../actions/todo_actions';
import TodoTextInput from './TodoTextInput.jsx';

let Header = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  },

  _onSave: function(text) {
    if (text.trim()){
      TodoActions.create(text);
    }

  }

});

export default Header;
