import { getInitialPages } from "@/Api/api";
import LocationsViewList from "@/components/LocationsViewList/LocationsViewList";


export default async function Location () {
  const data = await getInitialPages('location',1)
    return (
      <>
        <h1>Location page</h1>
          <LocationsViewList locations={data}/>
      </>
    );
  }

  export async function generateStaticParams() {
    const episodes = await getInitialPages('location',1)
   
    return episodes.map((episode:Episode) => ({
      slug: episode.id,
    }))
  }