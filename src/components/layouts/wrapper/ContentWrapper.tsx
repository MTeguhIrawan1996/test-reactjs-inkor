import { css } from '@/styled-system/css';
import { stack } from '@/styled-system/patterns';

type IContentWrapper = {
  children: React.ReactNode;
  title?: string;
};

export const ContentWrapper = ({ children, title }: IContentWrapper) => {
  return (
    <div
      className={stack({
        px: '6',
        pb: '12',
        pt: '6',
        borderWidth: '1',
        borderRadius: '2xl',
        borderTopLeftRadius: '4xl',
        borderBottomRightRadius: '4xl',
        borderColor: 'gray.300',
        boxShadow: 'md',
        boxShadowColor: 'blue.800',
      })}
    >
      <h1
        className={css({
          textShadow: '2xl',
          fontSize: '24',
          fontWeight: 'bold',
          color: 'gray.600',
        })}
      >
        {title}
      </h1>
      {children}
    </div>
  );
};
