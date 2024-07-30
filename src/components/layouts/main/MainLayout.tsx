import * as React from 'react';

import { css } from '@/styled-system/css';
import { container } from '@/styled-system/patterns';

type IMainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <main
      className={css({
        position: 'relative',
      })}
    >
      <nav
        role='nav'
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          bg: 'gray.100',
          px: '20',
          py: '2',
          mb: '8',
          boxShadow: 'md',
          top: '0',
          zIndex: 10,
        })}
      >
        <h1
          className={css({
            fontSize: '2xl',
            fontWeight: 'bold',
            color: 'gray.400',
            textShadow: '2px 2px 4px {colors.gray.300}',
          })}
        >
          RickAndMorthy
        </h1>
        <span
          className={css({
            fontSize: 'md',
            fontWeight: 'light',
            color: 'gray.500',
            textShadow: '2px 2px 4px {colors.gray.300}',
          })}
        >
          Created By ✨ M Teguh Irawan
        </span>
      </nav>
      <section
        className={container({
          maxWidth: '5xl',
          mb: '8',
        })}
      >
        {children}
      </section>
    </main>
  );
};
