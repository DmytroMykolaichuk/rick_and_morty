import { getInitialPages } from '@/service/api';
import ListCharacter from "@/components/ListCharacters/ListCharacter";

export default async function CharacterPage() {

  const data = await getInitialPages('character',1)

  return (
      <>
        <ListCharacter characters={data} />
      </>
    );
  }


