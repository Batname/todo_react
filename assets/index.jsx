import "./styles/base.css";
import "./styles/app.css";

import React from 'react';

import TodoApp from './components/TodoApp.jsx';

React.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
