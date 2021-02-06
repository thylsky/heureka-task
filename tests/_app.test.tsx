import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from '../pages/index';

import theme from 'styles/theme';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument();
  });
});
