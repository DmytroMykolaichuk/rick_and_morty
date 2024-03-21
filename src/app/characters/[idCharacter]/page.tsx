import Character from "@/components/Character/Character";
import Modal from "@/components/Modal/Modal";
import { getCharacter } from "@/Api/api";

export default async function CharacterPage({params:{idCharacter}}: {params:{idCharacter:number}} ){
    const character = await getCharacter(idCharacter)
    return(
    <Modal>
        <Character character={character}/>
    </Modal>    
    )
}

