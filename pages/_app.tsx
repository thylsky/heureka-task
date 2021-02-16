import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import intl from 'react-intl-universal';

import Layout from 'components/Layout';
import Spinner from 'components/UI/Spinner';

import { auth } from 'lib/auth';
import firebase from 'lib/firebase';
import AppContext from 'context/AppContext';

import theme from 'theme';
import 'styles/reset.css';
import 'styles/globals.css';

// Locales
import cs from 'locales/cs.json';
import de from 'locales/de.json';
import enUs from 'locales/en-US.json';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const { pathname, replace, locale } = useRouter();
  const [userLoading, setUserLoading] = useState(true);

  const isLayoutless = useMemo(() => Boolean(['/login'].includes(pathname)), [
    pathname,
  ]);

  const needsRedirect = !userLoading && !user && !isLayoutless;

  const loadLocales = useCallback(async () => {
    try {
      intl.init({
        locales: { cs, de, 'en-US': enUs },
        currentLocale: locale, // TODO: determine locale here
      });
    } catch (error) {
      throw new Error(`Localization initialization failed with: ${error} `);
    }
  }, [locale]);

  useEffect(() => {
    auth.onAuthStateChanged(u => {
      setUser(u);
      setUserLoading(false);
    });

    loadLocales();

    if (needsRedirect) {
      replace('/login');
    }
  }, [needsRedirect, replace, loadLocales]);

  const LayoutOrFragment = isLayoutless ? React.Fragment : Layout;

  return (
    <ThemeProvider theme={theme}>
      {userLoading || needsRedirect ? (
        <Spinner />
      ) : (
        <AppContext.Provider value={{ user, userLoading }}>
          <LayoutOrFragment>
            <Component {...pageProps} />
          </LayoutOrFragment>
        </AppContext.Provider>
      )}
    </ThemeProvider>
  );
};

export default App;
