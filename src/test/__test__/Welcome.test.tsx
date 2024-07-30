import { http, HttpResponse } from 'msw';

import { WelcomePage } from '@/components/features';

import { server } from '../mocks/server';
import { render, screen, userEvent } from '../../utils/test-utils';

describe('App', () => {
  it('checking whether vite and react text avilable', () => {
    render(<WelcomePage />);
    const text = screen.getByText('Vite + React');
    expect(text).toBeInTheDocument();
  });
  it('should increment count on click', async () => {
    render(<WelcomePage />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
  it('api success scenario on load', async () => {
    render(<WelcomePage />);
    expect(await screen.findByText('Todo List: 1')).toBeInTheDocument();
  });
  it('api error scenario on load', async () => {
    render(<WelcomePage />);
    server.use(
      http.get('https://dummyjson.com/todos', () => {
        return new HttpResponse(null, { status: 401 });
      }),
    );
    expect(screen.queryByText('Todo List')).not.toBeInTheDocument();
  });
});
