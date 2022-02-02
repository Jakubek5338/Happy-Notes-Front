import React, { useEffect } from 'react';
import ToDoCard from '../components/organisms/ToDoCard/ToDoCard';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const ToDo = () => {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetchItems('todos');
  });
  return <ToDoCard />;
};

export default ToDo;
