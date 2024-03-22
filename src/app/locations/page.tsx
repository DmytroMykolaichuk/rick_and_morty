import { getInitialPages } from "@/service/api";
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

