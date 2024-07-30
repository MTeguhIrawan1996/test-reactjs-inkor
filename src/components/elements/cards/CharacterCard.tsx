import { Icon } from '@iconify/react';
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { css } from '@/styled-system/css';
import { Box, Grid, Stack, Wrap } from '@/styled-system/jsx';

type IDescription = {
  icon: string;
  value: string;
};

type ICharacterCardProps = {
  imageUrl: string | null;
  descriptions: IDescription[];
};

export const CharacterCard = ({
  imageUrl,
  descriptions,
}: ICharacterCardProps) => {
  const [isLoading, setLoading] = React.useState<boolean | undefined>(true);
  return (
    <Stack>
      <figure
        data-testid='character-image'
        data-loading={isLoading}
        className={css({
          w: 'full',
          h: '250',
          borderRadius: 'xl',
          overflow: 'hidden',
          _loading: { bg: 'gray.200' },
        })}
      >
        <LazyLoadImage
          data-loading={isLoading}
          alt={imageUrl ?? ''}
          src={imageUrl ?? ''}
          onLoad={() => setLoading(undefined)}
          className={css({
            w: 'full',
            h: 'full',
            objectFit: 'cover',
            bgPosition: 'center',
            transition: 'all',
            transitionDuration: 'fast',
            transitionTimingFunction: 'ease-in-out',
            _loading: {
              filter: 'auto',
              scale: '1.05',
              blur: 'xl',
              grayscale: '100%',
            },
          })}
        />
      </figure>
      <Box
        gap='1'
        px='1.5'
        py='2'
        className={css({
          borderWidth: '1',
          borderRadius: 'lg',
          borderColor: 'gray.300',
        })}
      >
        <Grid columns={2} gap={1}>
          {descriptions.map((v, i) => (
            <Wrap
              align='center'
              justifyContent={(i + 1) % 2 === 0 ? 'flex-end' : 'flex-start'}
              gap='1.5'
              key={i}
            >
              <Icon
                icon={v.icon}
                className={css({ h: '3.5', w: '3.5', color: 'gray.400' })}
              />
              <span
                className={css({
                  fontWeight: '300',
                  fontSize: '10',
                })}
              >
                {v.value}
              </span>
            </Wrap>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};
