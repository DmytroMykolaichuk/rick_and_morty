import { getEpisode } from '@/Api/api';
import css from './styles.module.css';
import ListCharacter from '@/components/ListCharacters/ListCharacter';


export default async function EpisodeDetail({ params: { idEpisode } }: { params: { idEpisode: number } }) {
    const { name, air_date, episode, characters } = await getEpisode(idEpisode)
    return (
        <section className='section_detail'>
            <div className='wrapper_info'>
                <span className='detail_info'>{episode}</span>
                <h1>{name}</h1>
                <span className='detail_info'>{air_date}</span>
            </div>
            <ListCharacter characters={characters}/>
        </section>
    );
}

