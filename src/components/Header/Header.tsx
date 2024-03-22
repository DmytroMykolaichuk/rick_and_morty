import Link from "next/link";
import css from  './Header.module.css';

export default function Header() {
return(
    <>
        <header className={css.header}>
        <div className={css.heder_container}>
          <nav className={css.nav}>
            <Link  className='link flex' href='/'><strong>Home</strong></Link>
            <Link   className='link flex' href='/episodes'><strong>Episodes</strong></Link>
            <Link   className='link flex' href='/characters'><strong>Characters</strong></Link>
            <Link   className='link flex' href='/locations'><strong>Locations</strong></Link>
          </nav>
        </div>
        <hr/>
      </header>
    </>
)
}