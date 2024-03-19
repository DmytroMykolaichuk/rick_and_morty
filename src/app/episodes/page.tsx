import { fetchEpisodes } from "@/Api/api";
import EpisodeView from "@/components/EpisodeView/EpisodeView";
import css from './styles.module.css'

export default async function Episodes() {
  
  const episodes = await fetchEpisodes(1);
  return (
      <>
      <h1>Episodes page</h1>
      <ul className={css.list_view_episode}>
      {episodes.map((episode: { id: number; name: string; air_date:string; })=>
      <EpisodeView
      id={episode.id}
      name={episode.name} 
      date={episode.air_date}
      key={episode.id}/>)}
      </ul>
      </>
    );
  }


