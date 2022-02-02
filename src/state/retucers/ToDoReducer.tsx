import { Action } from '../actions';

const initialState = {
  todos: [
    {
      creator: '',
      title: '',
      type: '',
      _id: '',
      _v: '',
    },
  ],
};

const ToDoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'additem':
      return {
        ...state,
        [action.itemType]: [
          ...state.todos,
          {
            _id: action._id,
            title: action.title,
            body: '',
            creator: action.creator,
            type: action.itemType,
            _v: action._v,
          },
        ],
      };
    case 'removeitem':
      return {
        ...state,
        [action.itemType]: [...state.todos.filter((item) => item._id !== action._id)],
      };
    case 'fetchitems':
      return {
        ...state,
        todos: action.items,
      };
    default:
      return state;
  }
};

export default ToDoReducer;
