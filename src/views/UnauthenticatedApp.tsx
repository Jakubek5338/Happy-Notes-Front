import React, { useState } from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import { Formik, Field, Form } from 'formik';
import { useAuth } from '../hooks/useAuth';

const UnauthenticatedApp = () => {
  const [newUser, setNewUser] = useState(false);
  const register = () => setNewUser(!newUser);

  const { signIn, signUp } = useAuth();

  return (
    <AuthTemplate>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          {
            newUser
              ? signUp({ email: values.email, password: values.password })
              : signIn({ email: values.email, password: values.password });
          }
          resetForm();
        }}
      >
        {newUser ? (
          <>
            <div className=" w-72 h-96 bg-blue-50 rounded-lg border-2 border-green-500">
              <div className="w-full h-full  flex flex-col items-center justify-around ">
                <Form className="w-full h-1/3 flex justify-around items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <Field type="text" id="email" name="email" placeholder="email" className="w-4/5 mb-2" />
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      className="w-4/5 mt-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 duration-100 transition-all ease-in-out text-white w-36 md:w-20 h-8 rounded-lg flex justify-center items-center"
                  >
                    Register
                  </button>
                </Form>
                <button onClick={register} className="pt-4 hover:text-gray-600 duration-100 transition-all ease-in-ou">
                  I want to Login
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" w-72 h-96 bg-blue-50 rounded-lg border-2 border-green-500">
              <div className="w-full h-full  flex flex-col items-center justify-around ">
                <Form className="w-full h-1/3 flex justify-around items-center flex-col">
                  <div className="w-full flex justify-center items-center flex-col">
                    <Field type="text" id="email" name="email" placeholder="email" className="w-4/5 mb-2" />
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      className="w-4/5 mt-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 duration-100 transition-all ease-in-out text-white w-36 md:w-20 h-8 rounded-lg flex justify-center items-center"
                  >
                    Login
                  </button>
                </Form>
                <button onClick={register} className="pt-4 hover:text-gray-600 duration-100 transition-all ease-in-out">
                  I want to Register
                </button>
              </div>
            </div>
          </>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default UnauthenticatedApp;
