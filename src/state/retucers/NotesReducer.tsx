import { Action } from '../actions';

const initialState = {
  notes: [
    {
      creator: '',
      title: '',
      body: '',
      type: '',
      _id: '',
      _v: '',
    },
  ],
};

const SidesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'additem':
      return {
        ...state,
        [action.itemType]: [
          ...state.notes,
          {
            _id: action._id,
            title: action.title,
            body: action.body,
            creator: action.creator,
            type: action.itemType,
            _v: action._v,
          },
        ],
      };
    case 'removeitem':
      return {
        ...state,
        [action.itemType]: [...state.notes.filter((item) => item._id !== action._id)],
      };
    case 'fetchitems':
      return {
        ...state,
        notes: action.items,
      };
    default:
      return state;
  }
};

export default SidesReducer;
