
import React from 'react';
let ReactPropTypes = React.PropTypes;

let ENTER_KEY_CODE = 13;

let TodoTextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  render: function() /*object*/ {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  },


  _save: function() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },


  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  },


  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

});

export default TodoTextInput;
