import { render, screen } from '@testing-library/react';
import App from './App';
import AppContext from './config/AppContext';
import One from './hello/domain/One';
import Hello from './hello/infrastructure/primary/hello';

const one: One = {
  hello: () => 'Hello Test',
}

const provider = {
  one,
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello', () => {
  render(
    <AppContext.Provider value={ provider }>
      <Hello />
    </AppContext.Provider>
  );
  const helloElement = screen.getByText(/Hello Test/i);
  expect(helloElement).toBeInTheDocument();
});