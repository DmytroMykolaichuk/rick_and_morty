import Character from "@/components/Character/Character";
import Modal from "@/components/Modal/Modal";
import { getCharacter,getInitialPages } from "@/service/api";
import type { Metadata } from 'next'

// export async function generateStaticParams() {
//     const characters = await getInitialPages('character',1)
//     return characters.map((character:CharacterProp) => ({
//       idCharacter: character.id.toString(),
//     }))
//   }

type Props = {
    params: { idCharacter: number }
}

export async function generateMetadata(
    { params }: Props,

): Promise<Metadata> {

    const id = params.idCharacter

    const char =await getCharacter(id)


    return {
        title: char.name,
    }
}



export default async function CharacterDetail({params:{idCharacter}}: {params:{idCharacter:number}} ){
    const character = await getCharacter(idCharacter)
    return(
    <div>
        <Modal>
            <Character character={character}/>
        </Modal>  
    </div>  
    )
}

