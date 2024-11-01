import Link from 'next/link';
import css from './ListCharacter.module.css';

export default function EpisodesViewList({
  characters,
  url,
  title,
}: {
  url: string;
  title: string;
  characters: CharacterProp[] | Location[];
}) {
  return (
    <div>
      <h2>{title} :</h2>
      <ul className={css.list_characters}>
        {characters.map(({ id, name }: { id: number; name: string }) => (
          <li key={id} className={css.episode_character}>
            <Link href={`/${url}/${id}`} className={css.link_charcter}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
