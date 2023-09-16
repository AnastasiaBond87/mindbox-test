import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore } from '@/app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  { store, ...renderOptions }: ExtendedRenderOptions
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };
