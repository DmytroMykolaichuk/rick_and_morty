import { getInitialPages } from '@/service/api';
import LocationsViewList from '@/components/LocationsViewList/LocationsViewList';

export default async function Location() {
  const { results } = await getInitialPages('location', 1);
  return (
    <>
      <h1>Location page</h1>
      <LocationsViewList locations={results} />
    </>
  );
}
