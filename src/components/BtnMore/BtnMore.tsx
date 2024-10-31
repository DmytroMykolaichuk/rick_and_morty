import css from './BtnMore.module.css';

interface BtnMoreProp {
  page: number;
  maxPage: number;
  setPage: (prev: (prev: number) => number) => void;
}

export default function BtnMore({ page, maxPage, setPage }: BtnMoreProp) {
  return (
    <button
      type="button"
      onClick={() => setPage(prev => prev + 1)}
      className={css.button}
      disabled={page === maxPage}
    >
      <span className={css.eye}>👁 </span>
      {page === 42 ? 'finish' : 'more'}
      <span className={css.eye}> 👁</span>
    </button>
  );
}
