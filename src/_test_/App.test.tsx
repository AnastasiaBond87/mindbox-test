import { screen } from '@testing-library/react';
import App from '@/app';
import { renderWithProviders } from './utils/renderWithProviders';
import { store } from '@/app/store';
import userEvent from '@testing-library/user-event';

describe('test app component', () => {
  beforeEach(() => {
    renderWithProviders(<App />, { store });
  });

  test('test component render', () => {
    expect(screen.getByRole('heading', { level: 1 })).toContainHTML('todos');
  });

  test('test add todo', async () => {
    const input: HTMLInputElement = screen.getByPlaceholderText(/what need to be done/i);
    await userEvent.type(input, 'test1{enter}');
    await userEvent.type(input, 'test2{enter}');

    const list: HTMLUListElement = screen.getByTestId('todo-list');
    expect(list).toBeInTheDocument();
    expect(list.children).toHaveLength(2);

    expect(screen.getByText(/test1/i)).toBeInTheDocument();
  });
});
