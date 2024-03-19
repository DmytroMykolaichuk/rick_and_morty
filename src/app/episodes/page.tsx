import EpisodeView from "@/components/EpisodeView/EpisodeView";
import css from './styles.module.css'

export default async function Episodes() {
  const episodes = await fetchSeasons(1);
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

  async function fetchSeasons(page: number){
    const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`);
    const { results } = await response.json();
    return results
  }
