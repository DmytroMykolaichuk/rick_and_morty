import { getLocation } from "@/Api/api";
import ListCharacter from '@/components/ListCharacters/ListCharacter';

export default async function LocationDetail({params:{idLocation}}: {params:{idLocation:number}} ) {
    const { name,dimension,type, characters } = await getLocation(idLocation)
    return (
        <section className='section_detail'>
            <div className='wrapper_info'>
                <span className='detail_info'>Dimension: {dimension}</span>
                <h1>{name}</h1>
                <span className='detail_info'>Type:{type}</span>
            </div>
            <ListCharacter characters={characters}/>
        </section>
    );
}