import css from './ButtonMenu.module.css';

interface ButtonMenuProp {
  uniqueTypes: string[];
  type: string;
  setType: (e: string) => void;
}

export default function ButtonMenu({
  uniqueTypes,
  type,
  setType,
}: ButtonMenuProp) {
  return (
    <ul className={css.listType}>
      {uniqueTypes.map((e, idx) => (
        <li key={idx}>
          <button
            type="button"
            className={css.btnType}
            onClick={() => setType(e)}
            style={{
              backgroundColor: type === e ? '#218733' : 'aliceblue',
              color: type === e ? 'aliceblue' : '#218733',
            }}
          >
            {e || 'Secret'}
          </button>
        </li>
      ))}
    </ul>
  );
}
