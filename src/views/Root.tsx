import React from 'react';
import { useError } from '../hooks/useError';
import { useAuth } from '../hooks/useAuth';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import ErrorMessage from '../components/molecules/ErrorMessage/ErrorMessage';

function Root() {
  const auth = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user != null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}

export default Root;
