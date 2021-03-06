import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExcelExportButton from './ExcelExportButton';
import { Context } from '../Store/Store';

describe('<ExcelExportButton />', () => {
  it('has  button', () => {
    render(<ExcelExportButton />);

    const button = screen.getByText('π');

    expect(button.textContent).toBe('π');
  });

  it('has  click event', async () => {
    const onExportExcel = jest.fn(() => alert('μμ μΆλ ₯ μλ£'));

    render(
      <Context.Provider value={{ onExportExcel }}>
        <ExcelExportButton onExportExcel={onExportExcel} />
      </Context.Provider>
    );

    const button = screen.getByText('π');
    const spy = jest.spyOn(window, 'alert');

    userEvent.click(button);

    await waitFor(() => expect(spy).toHaveBeenCalledWith('μμ μΆλ ₯ μλ£'));
  });
});
