export async function getSeasons(id: Array<number>) {
  const result = await fetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  ).then(response => response.json());
  return result;
}

export async function getInitialPages(endpoint: string, page: number) {
  const { results } = await fetch(
    `https://rickandmortyapi.com/api/${endpoint}/?page=${page}`
  ).then(response => response.json());
  console.log(results);
  return results;
}

export async function getCharacter(id: number) {
  const character = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  ).then(response => response.json());
  return character;
}

export async function getEpisode(id: number) {
  const { name, air_date, episode, characters } = await fetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  ).then(response => response.json());

  const fetchedCharacters: CharacterProp[] = await Promise.all(
    characters.map((el: string) => fetch(el).then(response => response.json()))
  );

  return { name, air_date, episode, characters: fetchedCharacters };
}

export async function getLocation(id: number) {
  const { name, dimension, type, residents } = await fetch(
    `https://rickandmortyapi.com/api/location/${id}`
  ).then(response => response.json());

  const fetchedCharacters: CharacterProp[] = await Promise.all(
    residents.map((el: string) => fetch(el).then(response => response.json()))
  );

  return { name, dimension, type, characters: fetchedCharacters };
}
