import { getEpisode } from '@/Api/api';
import css from './styles.module.css';
import ListCharacter from '@/components/ListCharacters/ListCharacter';


export default async function EpisodeDetail({ params: { idEpisode } }: { params: { idEpisode: number } }) {
    const { name, air_date, episode, characters } = await getEpisode(idEpisode)
    return (
        <section className={css.section_detail_episode}>
            <div className={css.wrapper_info}>
                <span className={css.episode_num}>{episode}</span>
                <h1>{name}</h1>
                <span className={css.episode_num}>{air_date}</span>
            </div>
            <ListCharacter characters={characters}/>
        </section>
    );
}

