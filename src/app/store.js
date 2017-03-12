import { createStore } from 'redux';
import todoApp from './reducers';
// import { addTodo, toggleToDo, setVisibilityFilter, VisibilityFilters } from './actions';

const store = createStore(todoApp);

console.log(store.getState());