import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { auth } from 'lib/auth';
import firebase from 'lib/firebase';
import AppContext from 'context/AppContext';

import theme from 'styles/theme';
import 'styles/reset.css';
import 'styles/globals.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(u => {
      setUser(u);
      setUserLoading(false);
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ user, userLoading }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
