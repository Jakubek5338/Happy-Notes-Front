import { Action } from '../actions';

const initialState = {
  sides: [
    {
      creator: '',
      title: '',
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
          ...state.sides,
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
        [action.itemType]: [...state.sides.filter((item) => item._id !== action._id)],
      };
    case 'fetchitems':
      return {
        ...state,
        sides: action.items,
      };
    default:
      return state;
  }
};

export default SidesReducer;
