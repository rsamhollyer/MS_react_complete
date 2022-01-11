import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    /* Arrange */
    render(<Greeting />);

    /* Act */
    // ...nothing

    /* Asset */
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    // Check whethere helloWorldElement exists
    expect(helloWorldElement).toBeInTheDocument();
  });
});
