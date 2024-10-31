import { getEpisode } from '@/service/api';
import ListCharacter from '@/components/ListCharacters/ListCharacter';
import React from 'react';

export default async function EpisodeDetail({
  params: { idEpisode },
}: {
  params: { idEpisode: number };
}): Promise<React.ReactNode> {
  const { name, air_date, episode, characters } = await getEpisode(idEpisode);
  return (
    <section className="section_detail">
      <div className="wrapper_info">
        <span className="detail_info">{episode}</span>
        <h1>{name}</h1>
        <span className="detail_info">{air_date}</span>
      </div>
      <ListCharacter characters={characters} />
    </section>
  );
}
