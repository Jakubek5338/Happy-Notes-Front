import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../state';
import Card from '../../molecules/Card/Card';
import AddIcon from '../../../assets/icons/plus.svg';
import AddNewItem from '../../molecules/AddNewItem/AddNewItem';

function ToDo() {
  const [isVisible, setIsVisible] = useState(false);
  const setVisible = () => setIsVisible(!isVisible);
  const state = useSelector((state: State) => state.todos);
  return (
    <>
      <div>
        <div className="w-full min-h-screen bg-gradient-to-r dark:from-gray-900 from-white dark:via-gray-700 via-gray-400 dark:to-green-900 to-green-500 grid auto-rows-min 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {state.todos.map(({ title, _id }) => (
            <Card type="todos" title={title} _id={_id} key={_id} />
          ))}
          <button
            className="fixed right-5 bottom-5 w-16 h-16 dark:bg-green-400 bg-white rounded-full z-0 flex justify-center items-center"
            onClick={setVisible}
          >
            <img src={AddIcon} />
          </button>
          <AddNewItem type="todos" />
        </div>
      </div>
    </>
  );
}

export default ToDo;
