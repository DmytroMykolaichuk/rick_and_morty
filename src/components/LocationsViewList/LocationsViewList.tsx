import Link from 'next/link';
import css from './LocationsViewList.module.css';

export default function LocationsViewList({locations}:{locations:Location[]}) {
    return(
       <ul className={css.list_view_location}>
            {locations.map((el: Location)=>
            <li key={el.id} className={css.location_view}>
            <Link href={`/locations/${el.id}`} className='link'>{el.name}</Link>
            <span>{el.type}</span>
            </li>)}
       </ul>
    )
}