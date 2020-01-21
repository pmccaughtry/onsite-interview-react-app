import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Loading App component', () => {

  it('renders header and navigation links', () => {
    const { getByText } = render(<App />);

    const homeLink = getByText(/home/i),
      battleLink = getByText(/battle/i),
      popularLink = getByText(/popular/i),
      allLink = getByText(/all/i),
      javascriptLink = getByText(/javascript/i),
      rubyLink = getByText(/ruby/i),
      javaLink = getByText('Java'), // regexp gets hung up on java vs javascript
      cssLink = getByText(/css/i),
      pythonLink = getByText(/python/i);

    expect(homeLink).toBeInTheDocument();
    expect(battleLink).toBeInTheDocument();
    expect(popularLink).toBeInTheDocument();
    expect(allLink).toBeInTheDocument();
    expect(javascriptLink).toBeInTheDocument();
    expect(rubyLink).toBeInTheDocument();
    expect(javaLink).toBeInTheDocument();
    expect(cssLink).toBeInTheDocument();
    expect(pythonLink).toBeInTheDocument();
  });

  it('renders repositories section', () => {
    const { getByTestId } = render(<App />);
    const repositories = getByTestId('repositories');
    expect(repositories).not.toBeNull();
  });
});