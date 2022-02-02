import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import AddIcon from '../../../assets/icons/plus.svg';

interface AddNewItemProps {
  type: string;
}

function AddNewItem({ type }: AddNewItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const setVisible = () => setIsVisible(!isVisible);
  const dispatch = useDispatch();
  const { additem } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <button
        className="fixed right-5 bottom-5 w-16 h-16 dark:bg-green-400 bg-white dark:hover:bg-green-500 hover:bg-gray-200 duration-100 transition-all ease-in-out rounded-full z-0 flex justify-center items-center"
        onClick={setVisible}
      >
        <img src={AddIcon} />
      </button>
      {isVisible ? (
        <Formik
          initialValues={{
            title: '',
            body: '',
          }}
          onSubmit={async (values, { resetForm }) => {
            additem(values.title, values.body, type);
            setVisible();
            resetForm();
          }}
        >
          <div className="w-3/4 md:w-2/5 p-4 fixed top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-500 bg-gray-200 rounded-lg border-2 border-green-500 flex flex-col justify-center items-center">
            <Form className="w-full flex flex-col items-center justify-center">
              <>
                <div className="w-full flex justify-end p-4 text-black hover:text-gray-600 duration-100 transition-all ease-in-out">
                  <button onClick={setVisible}>Cancel</button>
                </div>
                <Field type="text" id="title" name="title" placeholder="title" className="w-4/5 my-2 rounded-lg" />
                {type === 'notes' ? (
                  <Field
                    as="textarea"
                    type="textarea"
                    id="body"
                    name="body"
                    placeholder="body"
                    className="w-4/5 my-2 rounded-lg h-40"
                  />
                ) : null}
                <button
                  className="bg-green-400 text-xs w-40 rounded-xl p-2 my-4 hover:bg-green-500 duration-100 transition-all ease-in-out"
                  type="submit"
                >
                  Add Note
                </button>
              </>
            </Form>
          </div>
        </Formik>
      ) : null}
    </>
  );
}

export default AddNewItem;
