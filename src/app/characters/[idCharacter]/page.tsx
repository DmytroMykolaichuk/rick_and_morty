import Character from "@/components/Character/Character";
import Modal from "@/components/Modal/Modal";
import { getCharacter,getInitialPages } from "@/Api/api";
import type { Metadata } from 'next'

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
    <Modal>
        <Character character={character}/>
    </Modal>    
    )
}

// export async function generateStaticParams() {
//     const episodes = await getInitialPages('character',1)
//     return episodes.map((episode:CharacterProp) => ({
//         slug: episode.id,
//     }))
//   }