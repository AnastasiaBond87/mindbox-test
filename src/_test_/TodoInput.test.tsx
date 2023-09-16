import { screen } from '@testing-library/react';
import TodoInput from '@/components/TodoInput';
import { renderWithProviders } from '@/_test_/utils/renderWithProviders';
import { store } from '@/app/store';
import userEvent from '@testing-library/user-event';

const mockSubmit = vi.fn();

describe('test todo input component', () => {
  beforeEach(() => {
    renderWithProviders(<TodoInput />, { store });
  });

  test('test component render', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/what need to be done/i)).toBeInTheDocument();
  });

  test('test input', async () => {
    const input: HTMLInputElement = screen.getByPlaceholderText(/what need to be done/i);
    expect(input.value).toBe('');

    await userEvent.type(input, 'test');
    expect(input.value).toBe('test');

    const clearBtn: HTMLButtonElement = await screen.findByTestId('clear-btn');
    await userEvent.click(clearBtn);
    expect(input.value).toBe('');
  });

  test('test form submit', async () => {
    const input: HTMLInputElement = screen.getByPlaceholderText(/what need to be done/i);

    await userEvent.type(input, 'test{enter}');
    mockSubmit.mock.calls.length === 1;
    expect(input.value).toBe('');
  });
});
