import { combineReducers } from 'redux';
import UUID from 'uuid';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const { SHOW_ALL } = VisibilityFilters;

const VisibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          taskID: UUID.v1(),
          title: action.title,
          done: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.taskID === action.taskID) {
          return Object.assign({}, todo, {
            done: !todo.done
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  VisibilityFilter,
  todos
});

export default todoApp;