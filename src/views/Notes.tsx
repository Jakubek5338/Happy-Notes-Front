import React, { useEffect } from 'react';
import NotesCard from '../components/organisms/NotesCard/NotesCard';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Notes = () => {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetchItems('notes');
  });
  return <NotesCard />;
};

export default Notes;
