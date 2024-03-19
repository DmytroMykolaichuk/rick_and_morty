import css from './styles.module.css';

interface Character {
    id: number;
    name: string;
}

export default async function EpisodeDetail({ params: { id } }: { params: { id: number } }) {
    const { name, air_date, episode, characters } = await getEpisode(id)
    return (
        <section className={css.section_detail_episode}>
            <div className={css.wrapper_info}>
                <span className={css.episode_num}>{episode}</span>
                <h1>{name}</h1>
                <span className={css.episode_num}>{air_date}</span>
            </div>
            <div>
                <h2>Characters :</h2>
                <ul className={css.list_characters}>
                    {characters.map(({ id, name }) => (
                        <li key={id} className={css.episode_character}>{name}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

async function getEpisode(id: number) {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const { name, air_date, episode, characters } = await response.json();

    const fetchedCharacters: Character[] = await Promise.all(
        characters.map((el: string) => fetch(el).then(response => response.json()))
    );

    return { name, air_date, episode, characters: fetchedCharacters }
}
