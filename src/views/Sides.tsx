import React, { useEffect } from 'react';
import SidesCard from '../components/organisms/SidesCard/SidesCard';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Sides = () => {
  const dispatch = useDispatch();
  const { fetchItems } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetchItems('sides');
  });
  return <SidesCard />;
};

export default Sides;
