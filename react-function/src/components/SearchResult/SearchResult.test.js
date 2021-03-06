import { render, screen } from '@testing-library/react';
import SearchResult from './SearchResult';

describe('<SearchResult />', () => {
  it('has h1', () => {
    render(<SearchResult />);

    const title = screen.getByTestId('main-title');

    expect(title.textContent).toBe('πο½π');
  });

  it('has result keyword, last page num', () => {
    render(<SearchResult keyword="vitamin" lastPageNum="417" />);

    const title = screen.getByTestId('main-title');

    expect(title.textContent).toBe('πvitaminο½π417');
  });
});
