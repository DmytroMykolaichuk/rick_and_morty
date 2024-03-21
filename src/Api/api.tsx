export async function fetchEpisodes(page: number){
    const {results} = await fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`).then(response => response.json());
    return results
  }

  export  async function getCharacter(id: number) {
    const character = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json());
 return character
}

export  async function getEpisode(id: number) {
    const { name, air_date, episode, characters } = await fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(response => response.json());
 
    const fetchedCharacters: CharacterId[] = await Promise.all(
        characters.map((el: string) => fetch(el).then(response => response.json()))
    );

    return { name, air_date, episode, characters: fetchedCharacters }
}