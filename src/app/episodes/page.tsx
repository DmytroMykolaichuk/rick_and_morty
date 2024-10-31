import React from 'react';
import Season from '@/components/Saeason/Season';
import css from './styles.module.css';

export default function Episodes(): React.ReactNode {
  const seasons = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
  ];

  return (
    <section>
      <h1>Episodes page</h1>
      <div className={css.container_season}>
        {seasons.map((el, index) => (
          <Season season={index + 1} series={el} key={index} />
        ))}
        <div style={{ width: 'calc(50% - 20px)' }}>Більше немає</div>
      </div>
    </section>
  );
}
