import { getInitialPages } from "@/Api/api";
import EpisodesViewList from "@/components/EpisodesViewList/EpisodesViewList";
import css from './styles.module.css'

export default async function Episodes() {
  
  const episodes = await getInitialPages('episode',1);
  return (
      <>
      <h1>Episodes page</h1>
      <ul className={css.list_view_episode}>
      {episodes.map((episode: { id: number; name: string; air_date:string; })=>
      <EpisodesViewList
      id={episode.id}
      name={episode.name} 
      date={episode.air_date}
      key={episode.id}/>)}
      </ul>
      </>
    );
  }
  export async function generateStaticParams() {
    const episodes = await getInitialPages('episode',1)
    return episodes.map((episode:Episode) => ({
      slug: episode.id,
    }))
  }


