import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import Header from './Header';

import theme from 'theme';

test('Test Header Renders', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  expect(screen.getByText('Login')).toHaveAttribute('title', 'Login');
});
