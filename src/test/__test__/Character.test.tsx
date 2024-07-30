import { http, HttpResponse } from 'msw';

import { CharacterPage } from '@/components/features';

import { server } from '@/test/mocks/server';

import { render, screen } from '../../utils/test-utils';

describe('Character', () => {
  it('checking title text avilable', () => {
    render(<CharacterPage />);
    const text = screen.getByText('Character List');
    expect(text).toBeInTheDocument();
  });
  it('api success scenario on load', async () => {
    render(<CharacterPage />);
    const image = await screen.findByTestId('character-image');
    expect(image).toBeInTheDocument();
  });
  it('api error scenario on load', async () => {
    render(<CharacterPage />);
    server.use(
      http.get(`${import.meta.env.VITE_REST_API_URL}/character`, () => {
        return new HttpResponse(null, { status: 401 });
      }),
    );
    const errorMessage = screen.queryByTestId('error');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
