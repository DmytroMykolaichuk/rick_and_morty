import { getInitialPages } from '@/Api/api';
import ListCharacter from "@/components/ListCharacters/ListCharacter";

export default async function CharacterPage() {

  const data = await getInitialPages('character',1)

  return (
      <>
        <ListCharacter characters={data} />
      </>
    );
  }

  export async function generateStaticParams() {
    const episodes = await getInitialPages('character',1)
    return episodes.map((episode:CharacterProp) => ({
      slug: episode.id,
    }))
  }
