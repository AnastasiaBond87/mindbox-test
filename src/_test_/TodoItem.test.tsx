import { screen } from '@testing-library/react';
import { ITodo } from '@/shared/types';
import TodoItem from '@/components/TodoItem';
import { renderWithProviders } from '@/_test_/utils/renderWithProviders';
import { store } from '@/app/store';
import userEvent from '@testing-library/user-event';

const todo: ITodo = {
  id: '1',
  body: 'test1',
  completed: false,
};

const onClick = vi.fn();

describe('test todo list component', () => {
  beforeEach(() => {
    renderWithProviders(<TodoItem todo={todo} />, { store });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('test component render', async () => {
    expect(screen.getByText(/test1/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(2);
  });

  test('test checkbox', async () => {
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    await userEvent.click(checkbox);
    onClick.mock.calls.length === 1;
  });

  test('test delete todo', async () => {
    const deleteBtn: HTMLButtonElement = screen.getByTestId('delete-btn');
    expect(deleteBtn).toBeInTheDocument();

    await userEvent.click(deleteBtn);
    onClick.mock.calls.length === 1;
  });

  test('test edit todo', async () => {
    const editBtn: HTMLButtonElement = screen.getByTestId('edit-btn');
    expect(editBtn).toBeInTheDocument();

    await userEvent.click(editBtn);
    onClick.mock.calls.length === 1;
  });
});
