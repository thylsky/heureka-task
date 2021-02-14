import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from '../pages/index';

import theme from 'theme';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(
      screen.getByRole('heading', { name: 'List of Products' })
    ).toBeInTheDocument();
  });
});
