import { CharacterCard } from '@/components/elements';

import { useReadAllCharacters } from '@/services/characters/useReadAllCharacters';
import { grid } from '@/styled-system/patterns';

export const CharacterList = () => {
  const { data, error } = useReadAllCharacters();

  if (error) {
    return <div data-testid='error'>Error: {error.message}</div>;
  }

  return (
    <div className={grid({ columns: 3, gap: 6 })}>
      {data?.results.map(({ id, image, name, gender, species, status }) => (
        <CharacterCard
          key={id}
          imageUrl={image}
          descriptions={[
            { icon: 'wpf:name', value: name },
            { icon: `mdi:gender-${gender.toLowerCase()}`, value: gender },
            { icon: 'ooui:logo-wikispecies', value: species },
            { icon: 'game-icons:grave-flowers', value: status },
          ]}
        />
      ))}
    </div>
  );
};
