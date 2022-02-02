import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { Provider } from 'react-redux';
import { ErrorProvider } from '../hooks/useError';
import store from '../state/store/store';
import GlobalStyle from '../assets/styles/GlobalStyle';
import { AuthProvider } from '../hooks/useAuth';

const AppProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
