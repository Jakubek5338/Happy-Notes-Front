import { combineReducers } from 'redux';
import notesReducer from './NotesReducer';
import todoReducer from './ToDoReducer';
import sidesReducer from './SidesReducer';

const reducers = combineReducers({
  notes: notesReducer,
  todos: todoReducer,
  sides: sidesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
