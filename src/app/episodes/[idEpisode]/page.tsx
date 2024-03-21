import { getEpisode,fetchEpisodes } from '@/Api/api';
import css from './styles.module.css';
import Link from 'next/link';

export default async function EpisodeDetail({ params: { idEpisode } }: { params: { idEpisode: number } }) {
    const { name, air_date, episode, characters } = await getEpisode(idEpisode)
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
                        <li key={id} className={css.episode_character}>
                            <Link href={`/characters/${id}`} className={css.link_charcter}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    const episodes = await fetchEpisodes(1)
   
    return episodes.map((episode:Episode) => ({
      slug: episode.id,
    }))
  }
