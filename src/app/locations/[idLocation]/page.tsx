import { getLocation, getInitialPages } from '@/service/api';
import ListCharacter from '@/components/ListCharacters/ListCharacter';

// export async function generateStaticParams() {
//     const locations = await getInitialPages('location',1)

//     return locations.map((location:Location) => ({
//       idLocation: location.id.toString(),
//     }))
//   }

export default async function LocationDetail({
  params: { idLocation },
}: {
  params: { idLocation: number };
}) {
  const { name, dimension, type, characters } = await getLocation(idLocation);
  return (
    <section className="section_detail">
      <div className="wrapper_info">
        <span className="detail_info">Dimension: {dimension}</span>
        <h1>{name}</h1>
        <span className="detail_info">Type:{type}</span>
      </div>
      <ListCharacter characters={characters} />
    </section>
  );
}
