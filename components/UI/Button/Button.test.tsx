import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import Button from './Button';

import theme from 'styles/theme';

test('Test Button Renders', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Button>Login</Button>
    </ThemeProvider>
  );

  expect(screen.getByRole('button')).toHaveTextContent('Login');
});

test('Test Disabled Button', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Button disabled={true}>Disabled Button</Button>
    </ThemeProvider>
  );
  expect(screen.getByRole('button')).toHaveAttribute('disabled');
});
