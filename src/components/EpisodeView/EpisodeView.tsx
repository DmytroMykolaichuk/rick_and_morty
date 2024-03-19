import Link from 'next/link';
import css from './EpisodeView.module.css';

interface EpisodeViewProps {
  name: string;
  id:number;
  date:string;
}


export default function EpisodeView({name,id,date}: EpisodeViewProps) {
    return (
        <li className={css.episode_view}>
          <Link href={`/episodes/${id}`} className='link'>№{id} {name}</Link>
          <span>{date}</span>
        </li>
      );
    }