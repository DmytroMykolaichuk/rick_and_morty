import { getCharacter } from '@/service/api';
import Character from '@/components/Character/Character';
import Modal from '@/components/Modal/Modal';
import type { Metadata } from 'next';

export default async function CharacterPageModal({
  params: { idCharacter },
}: {
  params: { idCharacter: number };
}) {
  const character = await getCharacter(idCharacter);

  return (
    <Modal>
      <Character character={character} />
    </Modal>
  );
}
