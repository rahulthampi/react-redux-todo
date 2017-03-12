export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = title => ({
  type: ADD_TODO,
  title
});

export const toggleToDo = taskID => ({
  type: TOGGLE_TODO,
  taskID
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});