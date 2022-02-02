import React, { useContext, useEffect, useState, FC } from 'react';
import axios from 'axios';
import { useError } from './useError';

interface ISignInProps {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthContext = React.createContext({} as any);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const { dispatchError } = useError();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/me`, {
            headers: {
              authorization: token,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const signIn = async ({ email, password }: ISignInProps) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data);
    } catch (e) {
      dispatchError('Invalid email or password');
    }
  };

  const signUp = async ({ email, password }: ISignInProps) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/register`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data);
    } catch (e) {
      dispatchError(
        'This account already exists or Incorrect email or password, remember email must have @ and password must be at least 6.',
      );
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return auth;
};
