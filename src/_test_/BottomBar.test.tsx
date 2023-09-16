import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/_test_/utils/renderWithProviders';
import BottomBar from '@/components/BottomBar';
import { store } from '@/app/store';
import userEvent from '@testing-library/user-event';

const onClick = vi.fn();

describe('test bottom bar component', () => {
  beforeEach(() => {
    renderWithProviders(<BottomBar />, { store });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('test render component', () => {
    const btnsList: HTMLUListElement = screen.getByRole('list');
    expect(btnsList).toBeInTheDocument();
  });

  test('test clear completed', async () => {
    const btn: HTMLButtonElement = screen.getByTestId('clear-completed-btn');
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    onClick.mock.calls.length === 1;
  });

  test('test change list type', async () => {
    const btns: HTMLButtonElement[] = screen.getAllByTestId('list-type-btn');
    expect(btns).toHaveLength(3);

    await userEvent.click(btns[0]);
    onClick.mock.calls.length === 1;
  });
});
