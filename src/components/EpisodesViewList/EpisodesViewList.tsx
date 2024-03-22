import Link from 'next/link';
import css from './EpisodesViewList.module.css';




export default function EpisodeView({name,id,date}: EpisodeViewProps) {
    return (
        <li className={css.episode_view}>
          <Link href={`/episodes/${id}`} className='link'>№{id} {name}</Link>
          <span>{date}</span>
        </li>
      );
    }