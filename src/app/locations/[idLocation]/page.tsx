import { getLocation } from "@/Api/api";
import css from './styles.module.css'
import ListCharacter from '@/components/ListCharacters/ListCharacter';

export default async function LocationDetail({params:{idLocation}}: {params:{idLocation:number}} ) {
    const { name,dimension,type, characters } = await getLocation(idLocation)
    return (
        <section className={css.section_detail_episode}>
            <div className={css.wrapper_info}>
                <span className={css.episode_num}>{dimension}</span>
                <h1>{name}</h1>
                <span className={css.episode_num}>{type}</span>
            </div>
            <ListCharacter characters={characters}/>
        </section>
    );
}