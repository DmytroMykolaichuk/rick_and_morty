import React from 'react';
import Link from 'next/link';
import { getSeasons } from '@/service/api';
import css from './Season.module.css';

interface PropSeason {
  season: number;
  series: Array<number>;
}

export default async function Season({ season, series }: PropSeason) {
  const episodes = await getSeasons(series);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Season {season}</h2>
      <ul className={css.list_series}>
        {episodes.map((episode: Episode, index: number) => (
          <li key={episode.id}>
            <Link href={`episodes/${episode.id}`} className={css.series_link}>
              <span className={css.number}>№ {index + 1}</span>
              <span>{episode.name}</span>
              <span>{episode.air_date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
