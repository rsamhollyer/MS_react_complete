import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    /* Arrange */
    render(<Greeting />);

    /* Act */
    // ...nothing

    /* Assert */
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    // Check whethere helloWorldElement exists
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders Nice to meet you if the button was NOT clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText('Nice to meet you', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed if the button was clicked', () => {
    render(<Greeting />);

    /* Act */
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    /* Assert */
    const outputElement = screen.getByText('Changed', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
});
