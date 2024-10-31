'use client';
import { getInitialPages } from '@/service/api';
import ListCharacter from '@/components/ListCharacters/ListCharacter';
import { useEffect, useState } from 'react';
import css from './styles.module.css';

export default function CharacterPage() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterProp[]>([]);

  useEffect(() => {
    let isMounted = true;
    async function getMoreCharacters() {
      if (isMounted) {
        const data = await getInitialPages('character', page);
        setCharacters(prev => [...prev, ...data]);
      }
    }
    getMoreCharacters();

    return () => {
      isMounted = false;
    };
  }, [page]);

  return (
    <>
      <ListCharacter characters={characters} />
      <button
        type="button"
        onClick={() => setPage(prev => prev + 1)}
        className={css.button}
        disabled={page === 42}
      >
        <span className={css.eye}>👁 </span>
        {page === 42 ? 'finish' : 'more'}
        <span className={css.eye}> 👁</span>
      </button>
    </>
  );
}
