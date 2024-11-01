async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const BASE_URL = 'https://rickandmortyapi.com/api/';

export async function getSeasons(id: Array<number>) {
  return await fetchData(`${BASE_URL}episode/${id}`);
}

export async function getInitialPages(endpoint: string, page: number) {
  return await fetchData(`${BASE_URL}${endpoint}/?page=${page}`);
}

export async function getCharacter(id: number) {
  return await fetchData(`${BASE_URL}character/${id}`);
}

export async function getEpisode(id: number) {
  const { name, air_date, episode, characters } = await fetchData<{
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
  }>(`${BASE_URL}episode/${id}`);

  const fetchedCharacters = await Promise.all(
    characters.map(el => fetchData<CharacterProp>(el))
  );

  return { name, air_date, episode, characters: fetchedCharacters };
}

export async function getLocation(id: number) {
  const { name, dimension, type, residents } = await fetchData<{
    name: string;
    dimension: string;
    type: string;
    residents: string[];
  }>(`${BASE_URL}location/${id}`);

  const fetchedCharacters = await Promise.all(
    residents.map(el => fetchData<CharacterProp>(el))
  );

  return { name, dimension, type, characters: fetchedCharacters };
}
