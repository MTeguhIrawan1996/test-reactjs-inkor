import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

import { ProviderWrapper } from '@/components/layouts/wrapper/ProviderWrapper';

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactNode, options = {}) {
  return render(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ProviderWrapper>{children}</ProviderWrapper>
    ),
    ...options,
  });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
