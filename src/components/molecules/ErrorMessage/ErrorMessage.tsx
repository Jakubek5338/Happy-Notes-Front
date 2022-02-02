import React from 'react';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.';

type MessageType = { message?: string };

const ErrorMessage = ({ message = defaultErrorMessage }: MessageType) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
