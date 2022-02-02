import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const additem = (title: string, body: string, itemType: string) => {
  const creator = localStorage.getItem('token');
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/note', {
        headers: {
          authorization: creator,
        },
        itemType,
        creator,
        title,
        body,
      });
      const _id = response.data._id;
      const _v = response.data._v;
      dispatch({
        type: ActionType.ADDITEM,
        _id,
        title,
        body,
        creator,
        itemType,
        _v,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeitem = (_id: string, itemType: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/api/note/${_id}`);
      dispatch({
        type: ActionType.REMOVEITEM,
        _id,
        itemType,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchItems = (itemType: string) => {
  const creator = localStorage.getItem('token');
  if (creator) {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/note/${itemType}`, {
          headers: {
            authorization: creator,
          },
        });
        const items = response.data;
        dispatch({
          type: ActionType.FETCHITEMS,
          items,
        });
      } catch (err) {
        console.log(err);
      }
    };
  }
};
