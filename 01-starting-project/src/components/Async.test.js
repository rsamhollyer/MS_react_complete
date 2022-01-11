import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    /* This will simulate the built in window fetch funciton using a mock fetch built into jest. We do this to avoid making network calls to 3rd party data or our own data base, because we're testing that our expected results are matched, not if the connection is necessarily made, at least in this example
     */

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      'listitem',
      { exact: true },
      { timeout: 5000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
