import React, { PropTypes } from 'react';
import Input from './Input';
import Anchor from './Anchor';

const Todo = ({ onClick, done, title }) => (
  <li>
    <Anchor
      onClick={onClick}
      class={done ? 'taskCompleted' : ''}
    >
      {title}
    </Anchor>
    <Input
      value={title}
    />
  </li >
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Todo;