import Image from "next/image";
import css from './Character.module.css'
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { getCharacter } from "@/service/api";

export default async function Character({id}:{id:string}) {

    const character = await getCharacter(id)

    return(
    <section className={css.section_character}>

        <h1 className={css.name}>{character.name}</h1>

        <Image src={character.image} alt={character.name} width={300} height={300} className={css.avatar}  priority={true}/> 

        <div className={`flex ${css.wrap_info}`}>
            <div>Status: <span className={css.info_data}>{character.status}</span></div>
            <div>Species: <span className={css.info_data}>{character.species}</span></div>
            <div>Gender: <span className={css.info_data}>{character.gender}</span></div>
        </div>

        {character.type && <div>Type: <span className={css.info_data}>{character.type}</span></div>}

        <div className={css.position_wrapper}>
            <div>First Appearance: <span className={css.info_data}>{character.origin.name}</span></div>
            <CgArrowsExchangeAltV size={20}/>
            <div>Last Appearance: <span className={css.info_data}>{character.location.name}</span></div>
        </div>

    </section>
    )
}