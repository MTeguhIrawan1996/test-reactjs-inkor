import { MainLayout } from '@/components/layouts/main';

import { render, screen } from '../../utils/test-utils'; // Ganti dengan path yang sesuai

describe('MainLayout', () => {
  it('renders the layout with children', () => {
    render(
      <MainLayout>
        <div>Child Content</div>
      </MainLayout>,
    );

    // Memeriksa elemen yang harus ada
    expect(screen.getByText('RickAndMorthy')).toBeInTheDocument();
    expect(
      screen.getByText('Created By ✨ M Teguh Irawan'),
    ).toBeInTheDocument();

    // Memeriksa bahwa children dirender
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('renders the nav and section correctly', () => {
    render(
      <MainLayout>
        <div>Another Child</div>
      </MainLayout>,
    );

    // Memeriksa elemen nav
    expect(screen.getByRole('nav')).toBeInTheDocument();

    // Memeriksa elemen section
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
