import { CharacterList } from '@/components/features/character/sections/CharacterList';
import { ContentWrapper } from '@/components/layouts';

const CharacterPage = () => {
  return (
    <ContentWrapper title='Character List'>
      <CharacterList />
    </ContentWrapper>
  );
};

export default CharacterPage;
