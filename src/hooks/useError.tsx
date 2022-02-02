import React, { useCallback, useContext, useState, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorContext = React.createContext({} as any);

export const ErrorProvider: FC = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const dispatchError = useCallback((message) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 7000);
  }, []);

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return errorContext;
};
