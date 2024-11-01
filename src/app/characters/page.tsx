'use client';
import { getInitialPages } from '@/service/api';
import ListCharacter from '@/components/ListCharacters/ListCharacter';
import { useEffect, useState } from 'react';
import BtnMore from '@/components/BtnMore/BtnMore';

export default function CharacterPage() {
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<CharacterProp[]>([]);
  const [maxPage, setMaxPage] = useState<number>(2);

  useEffect(() => {
    async function getMoreCharacters() {
      const { results, info } = await getInitialPages('character', page);
      setCharacters(prev => [...prev, ...results]);
      if (maxPage != info.pages) setMaxPage(info.pages);
    }
    getMoreCharacters();
  }, [page]);

  return (
    <>
      <ListCharacter
        characters={characters}
        url="characters"
        title="Characters"
      />
      <BtnMore maxPage={maxPage} page={page} setPage={setPage} />
    </>
  );
}
