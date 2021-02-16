import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import intl from 'react-intl-universal';

import Header from './Header';

import theme from 'theme';

import enUs from 'locales/en-US.json';

test('Test Header Renders', async () => {
  try {
    intl.init({
      locales: { 'en-US': enUs },
      currentLocale: 'en-US', // TODO: determine locale here
    });
  } catch (error) {
    throw new Error(`Localization initialization failed with: ${error} `);
  }

  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  expect(screen.getByText('Logout')).toHaveAttribute('title', 'Logout');
});
