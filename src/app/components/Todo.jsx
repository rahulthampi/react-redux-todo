import React, { PropTypes } from 'react';
import Input from './Input';
import Link from './Link';

const Todo = ({ onClick, done, title }) => (
  <li>
    {/* <a
      href=""
      onClick={() => onClick}
      className={done ? 'taskCompleted' : ''}
    >
      {title}
    </a>*/}
    <Link
      onClick={onClick}
      class={done ? 'taskCompleted' : ''}
    />
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