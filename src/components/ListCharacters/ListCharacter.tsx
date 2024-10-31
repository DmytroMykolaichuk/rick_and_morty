import Link from 'next/link';
import css from './ListCharacter.module.css';

export default function EpisodesViewList({
  characters,
}: {
  characters: CharacterProp[];
}) {
  return (
    <div>
      <h2>Characters :</h2>
      <ul className={css.list_characters}>
        {characters.map(({ id, name }: { id: number; name: string }) => (
          <li key={id} className={css.episode_character}>
            <Link href={`/characters/${id}`} className={css.link_charcter}>
              {name}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
