import { getCharacter,getInitialPages } from "@/service/api";
import Character from "@/components/Character/Character";
import Modal from "@/components/Modal/Modal";

// export async function generateStaticParams() {
//     const characters = await getInitialPages('character',1)
//     return characters.map((character:CharacterProp) => ({
//       idCharacter: character.id.toString(),
//     }))
//   }

export default async function CharacterPageModal({params:{idCharacter}}: {params:{idCharacter:number}} ){
    const character = await getCharacter(idCharacter)
    
    return(
    <Modal>  
        <Character character={character}/>
    </Modal>  
    )
}
