import React from 'react';
import css from './Soon.module.css';

export default function Soon(): React.ReactNode {
  const text = '🤸Це Все Що Є На Ресурсі🤸‍♂️';

  return (
    <div className={css.container}>
      <div className={css.circle__wrapper}>
        <div className={css.circle__svg}>
          <svg
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <circle cx="150" cy="150" r="60" fill="none" />
            <g>
              <text fill="#218733">
                <textPath href="#circlePath" startOffset="50%">
                  {text}
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
