import Link from "next/link";
import css from  './Header.module.css';

export default function Header() {
return(
    <>
        <header className={css.header}>
        <div className={css.heder_container}>
          <nav className={css.nav}>
            <Link  className={css.link} href='/'>Home</Link>
            <Link  className={css.link} href='/seasons'>Seasons</Link>
            <Link  className={css.link} href='/characters'>Characters</Link>
            <Link  className={css.link} href='/locations'>Locations</Link>
          </nav>
        </div>
        <hr/>
      </header>
    </>
)
}